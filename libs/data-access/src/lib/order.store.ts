import { create } from 'zustand';

interface OrderState {
  status: 'IDLE' | 'SEARCHING' | 'ACCEPTED' | 'COMPLETED';
  price: number;
  requestRide: () => void;
  acceptRide: () => void;
  reset: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  status: 'IDLE',
  price: 0,
  requestRide: () => {
    console.log('API: Creating Order...');
    set({ status: 'SEARCHING' });
    setTimeout(() => {
      set({ price: 450 });
    }, 1000);
  },
  acceptRide: () => {
    console.log('API: Driver Accepted Order...');
    set({ status: 'ACCEPTED' });
  },
  reset: () => set({ status: 'IDLE', price: 0 }),
}));
