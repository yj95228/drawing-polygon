import React from 'react';
import create from 'zustand';

interface Store {
  input: string;
  option: 'WKT' | 'JSON';
  polygon: string;
  selectWKT: () => void;
  selectJSON: () => void;
  setInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  drawPolygon: (input: string) => void;
  resetPolygon: () => void;
}
export const useStore = create<Store>((set) => ({
  input: '',
  option: 'WKT',
  polygon: '',
  selectWKT: () => set({ option: 'WKT' }),
  selectJSON: () => set({ option: 'JSON' }),
  setInput: (event) => set({ input: event.target?.value }),
  drawPolygon: (input) => {
    set({ polygon: input });
  },
  resetPolygon: () => {
    set({ input: '', polygon: '' });
  },
}));

export default useStore;
