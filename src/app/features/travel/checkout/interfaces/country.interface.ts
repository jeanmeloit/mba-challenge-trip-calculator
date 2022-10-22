export interface Country {
  country: string;
  cities: City[];
}

export interface City {
  city: string;
  latitude: number;
  longitude: number;
}
