export type PlaceType = 'музей' | 'замок' | 'парк' | 'зоопарк' | 'монастырь' | 'science center' | 'бассейн' | 'другое';
export type WeatherSuitability = 'indoor' | 'outdoor' | 'mixed';
export type GutscheinCondition = 'бесплатно' | 'скидка' | 'специальная цена' | 'неизвестно';

export interface Place {
  id: string;
  name: string;
  city: string;
  type: PlaceType;
  description: string;
  couponType: 'free' | 'discount' | 'special_price' | 'unknown';
  couponInfo: Record<'ru' | 'de' | 'en', string>;
  distanceKm: number;
  travelTimeMins: number; // in minutes
  weather: WeatherSuitability;
  goodForTeens: boolean;
  photoUrl: string | null;
  googleMapsUrl: string;
  website: string;
  
  // Google Places API integrations
  queryName?: string;
  googlePlaceId?: string;
  googlePhotoName?: string;
  photoSource?: string;
  photoAttributions?: string[];
  manualPhotoUrl?: string;
}

export interface CouponUsage {
  id: string;
  date: string;
  name: string;
  city: string;
}

export interface UserState {
  usedPlaces: string[];
  notes: Record<string, string>;
  couponsUsed: CouponUsage[];
  language: 'ru' | 'de' | 'en';
  baseLocation: { name: string; lat: number; lng: number };
  hasChosenLocation: boolean;
}
