const ROUTES_CACHE_KEY = "familienpass_routes_cache";
const CACHE_TTL_DAYS = 30;

export async function loadRouteMatrix(origin: { lat: number; lng: number }, places: { id: string; name: string; lat: number; lng: number }[]) {
  const cacheKey = `routes_${origin.lat}_${origin.lng}`;
  const storedCache = localStorage.getItem(ROUTES_CACHE_KEY);
  
  let cache = storedCache ? JSON.parse(storedCache) : {};
  
  if (cache[cacheKey]) {
    const cachedData = cache[cacheKey];
    const now = new Date();
    const updated = new Date(cachedData.updatedAt);
    const diffDays = (now.getTime() - updated.getTime()) / (1000 * 3600 * 24);
    
    if (diffDays < CACHE_TTL_DAYS) {
      return cachedData.routes;
    }
  }

  // Filter places that have coordinates
  const destinations = places.filter(p => p.lat && p.lng);
  
  try {
    const response = await fetch("/api/routes/matrix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origin, destinations })
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.routes) {
          cache[cacheKey] = {
              origin,
              updatedAt: new Date().toISOString(),
              routes: data.routes
          };
          localStorage.setItem(ROUTES_CACHE_KEY, JSON.stringify(cache));
          return data.routes;
      }
    } else {
      console.error(`Routes matrix API returned ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to fetch route matrix:", error);
  }
  
  return {};
}
