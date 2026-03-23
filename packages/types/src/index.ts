// Hotel
export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: Location;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: Amenity[];
  roomTypes: RoomType[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  address: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export type Amenity =
  | "wifi"
  | "parking"
  | "pool"
  | "gym"
  | "restaurant"
  | "spa"
  | "airConditioning"
  | "petFriendly";

// Booking
export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  roomTypeId: string;
  checkIn: Date;
  checkOut: Date;
  guestCount: number;
  totalPrice: number;
  status: BookingStatus;
  createdAt: Date;
}

export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

// Room
export interface RoomType {
  id: string;
  hotelId: string;
  name: string;
  description: string;
  maxGuests: number;
  pricePerNight: number;
  available: boolean;
}

// User
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  createdAt: Date;
}

// Auth
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

// API response wrapper — every API response has this shape
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  error: string;
  code: string;
  statusCode: number;
}

// Search
export interface SearchParams {
  city: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  minPrice?: number;
  maxPrice?: number;
  amenities?: Amenity[];
  page?: number;
  limit?: number;
}

export interface SearchResult {
  hotels: Hotel[];
  total: number;
  page: number;
  totalPages: number;
}
