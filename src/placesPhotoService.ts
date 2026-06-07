import { Place } from './types';
import { GOOGLE_MAPS_API_KEY } from './config';

export interface PhotoCacheEntry {
  photoUrl: string;
  googlePlaceId: string;
  googlePhotoName: string;
  googleMapsUrl?: string;
  websiteUrl?: string;
  photoSource: 'Google Places' | 'manual' | 'default';
  manualPhotoUrl?: string;
  updatedAt: string;
}

export type PhotoCache = Record<string, PhotoCacheEntry>;

const CACHE_KEY = 'familienpass_google_photos_cache';

// Slugify helper to get stable lowercase keys matching "wilhelma-stuttgart"
export function getPlaceSlug(place: Place): string {
  const name = place.name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  const city = place.city.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
  return `${name}-${city}`;
}

export function getPhotosCache(): PhotoCache {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  } catch (e) {
    console.error('Error reading photos cache from localStorage', e);
    return {};
  }
}

export function setPhotosCache(cache: PhotoCache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    console.error('Error writing photos cache to localStorage', e);
  }
}

export async function loadGooglePlacePhoto(
  place: Place, 
  forceRefresh = false
): Promise<PhotoCacheEntry | null> {
  const slug = getPlaceSlug(place);
  const cache = getPhotosCache();
  
  // 1. Check if we already have it in cache (unless forcing refresh)
  const cachedEntry = cache[slug];
  if (!forceRefresh && cachedEntry && (cachedEntry.photoUrl || cachedEntry.photoSource === 'manual')) {
    return cachedEntry;
  }

  // Determine search query
  const searchQuery = place.queryName || `${place.name} ${place.city || ""} Germany`;
  
  console.log("Google Places API key exists:", Boolean(GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY !== "PASTE_API_KEY_HERE" && GOOGLE_MAPS_API_KEY !== "YOUR_API_KEY"));
  console.log("Loading photo for:", place.name, place.queryName);
  console.log("Search query:", searchQuery);

  try {
    // Perform Places Text Search API call using our proxy
    const response = await fetch("/api/places/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ searchQuery })
    });

    console.log("Text Search response status:", response.status);

    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Text Search raw response:", data);
    
    // Check if error was returned by proxy (e.g. key missing)
    if (data.error === "API_KEY_MISSING") {
      console.warn("Google Places API Key is missing:", data.message);
      return null;
    }

    const foundPlaces = data.places || [];
    if (foundPlaces.length === 0) {
      console.warn("Google Places photo not found for:", place.name);
      return null;
    }

    const firstPlace = foundPlaces[0];
    console.log("Selected place:", firstPlace);
    console.log("Photos array:", firstPlace?.photos);

    if (!firstPlace.photos || firstPlace.photos.length === 0) {
      console.warn("Google Places photo not found for reference (place has no photos):", place.name);
      return null;
    }

    const photoName = firstPlace.photos[0].name; // format: places/PLACE_ID/photos/PHOTO_REFERENCE
    console.log("Photo name:", photoName);

    const isClientKeyValid = GOOGLE_MAPS_API_KEY && 
                             GOOGLE_MAPS_API_KEY !== "PASTE_API_KEY_HERE" && 
                             GOOGLE_MAPS_API_KEY !== "YOUR_API_KEY";
    const photoUrl = isClientKeyValid
      ? `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=800&key=${GOOGLE_MAPS_API_KEY}`
      : `/api/places/photo?name=${encodeURIComponent(photoName)}`;

    console.log("Generated photo media URL:", photoUrl);

    const newEntry: PhotoCacheEntry = {
      photoUrl,
      googlePlaceId: firstPlace.id,
      googlePhotoName: photoName,
      googleMapsUrl: firstPlace.googleMapsUri || place.googleMapsUrl,
      websiteUrl: firstPlace.websiteUri || place.website,
      photoSource: "Google Places",
      updatedAt: new Date().toISOString().split('T')[0]
    };

    // Save in cache
    const updatedCache = { ...getPhotosCache(), [slug]: newEntry };
    setPhotosCache(updatedCache);

    return newEntry;
  } catch (error) {
    console.error("Google Places photo loading failed for:", place.name, error);
    return null;
  }
}

export function saveManualPhoto(place: Place, manualUrl: string): PhotoCacheEntry {
  const slug = getPlaceSlug(place);
  const cache = getPhotosCache();
  
  const updatedEntry: PhotoCacheEntry = {
    photoUrl: manualUrl,
    googlePlaceId: cache[slug]?.googlePlaceId || "",
    googlePhotoName: cache[slug]?.googlePhotoName || "",
    googleMapsUrl: cache[slug]?.googleMapsUrl || place.googleMapsUrl,
    websiteUrl: cache[slug]?.websiteUrl || place.website,
    photoSource: "manual",
    manualPhotoUrl: manualUrl,
    updatedAt: new Date().toISOString().split('T')[0]
  };

  const updatedCache = { ...cache, [slug]: updatedEntry };
  setPhotosCache(updatedCache);
  return updatedEntry;
}

export function clearPhotoCacheEntry(place: Place) {
  const slug = getPlaceSlug(place);
  const cache = getPhotosCache();
  delete cache[slug];
  setPhotosCache(cache);
}
