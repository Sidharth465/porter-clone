export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export interface Order {
  id: string;
  status: 'PENDING' | 'ACCEPTED' | 'IN_TRANSIT' | 'COMPLETED';
  pickupLocation: Location;
  dropLocation: Location;
  price: number;
  driverId?: string;
  customerId: string;
}
