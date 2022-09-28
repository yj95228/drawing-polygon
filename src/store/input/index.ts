import React from 'react';
import create from 'zustand';

type Option = 'WKT' | 'JSON';
interface Store {
  input: string;
  option: 'WKT' | 'JSON';
  polygon: string;
  selectWKT: () => void;
  selectJSON: () => void;
  setInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  drawPolygon: (option: Option, input: string) => void;
  resetPolygon: (option: Option) => void;
}
export const useStore = create<Store>((set) => ({
  input: '',
  option: 'WKT',
  polygon: '',
  selectWKT: () => set({ option: 'WKT' }),
  selectJSON: () => set({ option: 'JSON' }),
  setInput: (event) => set({ input: event.target?.value }),
  drawPolygon: (option, input) => {
    if (option === 'WKT') {
      set({ polygon: input });
    } else {
      if (input) {
        set({ polygon: JSON.parse(input).coordinates[0] });
      }
    }
  },
  resetPolygon: (option) => {
    if (option === 'WKT') {
      set({ input: '', polygon: '' });
    } else {
      set({
        input: '',
        polygon: JSON.parse('{"coordinates":[[]]}').coordinates,
      });
    }
  },
}));

export default useStore;
