import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GOOGLE_MAPS_API_KEY } from "./src/config";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper to determine the key to use
  const getApiKey = () => {
    const key = process.env.GOOGLE_MAPS_PLATFORM_KEY || process.env.GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY;
    if (!key || key === "PASTE_API_KEY_HERE" || key === "YOUR_API_KEY") {
      return null;
    }
    return key;
  };

  // API Route: Places Text Search Proxy
  app.post("/api/places/search", async (req, res) => {
    try {
      const { searchQuery } = req.body;
      if (!searchQuery) {
        return res.status(400).json({ error: "Search query is required" });
      }

      const apiKey = getApiKey();
      if (!apiKey) {
        return res.status(200).json({ 
          error: "API_KEY_MISSING",
          message: "Google Maps API Key is not configured yet. Please configure it in AI Studio Secrets or src/config.ts." 
        });
      }

      const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.googleMapsUri,places.photos,places.websiteUri"
        },
        body: JSON.stringify({
          textQuery: searchQuery,
          languageCode: "de",
          regionCode: "DE"
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Google API returned error status:", response.status, errorText);
        return res.status(response.status).json({ error: "Google API Error", details: errorText });
      }

      const data = await response.json();
      return res.json(data);
    } catch (error: any) {
      console.warn("Google Places Search API proxy warning:", error);
      return res.status(500).json({ error: error.message });
    }
  });

  // API Route: Places Photo Proxy (Pipes the photo from Google API to browser directly)
  app.get("/api/places/photo", async (req, res) => {
    try {
      const name = req.query.name as string;
      if (!name) {
        return res.status(400).json({ error: "Photo search name is required" });
      }

      const apiKey = getApiKey();
      if (!apiKey) {
        return res.status(400).json({ error: "API key is not configured" });
      }

      // Format of name typically is: places/PLACE_ID/photos/PHOTO_REFERENCE
      const photoUrl = `https://places.googleapis.com/v1/${name}/media?maxWidthPx=800&key=${apiKey}`;
      
      const response = await fetch(photoUrl);
      if (!response.ok) {
        console.warn("Place Photo response was not OK", response.status);
        return res.status(response.status).send("Failed to retrieve image from Google Places");
      }

      const contentType = response.headers.get("content-type");
      if (contentType) {
        res.setHeader("Content-Type", contentType);
      }
      
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return res.send(buffer);
    } catch (error: any) {
      console.error("Error in Places Photo proxy route:", error);
      return res.status(500).json({ error: error.message });
    }
  });

  // Serve static files / integration with Vite
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
