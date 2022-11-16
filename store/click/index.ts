import create from 'zustand';

interface LngLat {
  lng: number;
  lat: number;
}
interface Coord {
  coord: {
    x: number;
    y: number;
  };
}
interface Store {
  polygon: string;
  marker: LngLat[];
  clickPolygon: ({ coord: { x, y } }: Coord) => void;
  closePolygon: () => void;
  resetPolygon: () => void;
}
export const useStore = create<Store>((set) => ({
  polygon: '',
  marker: [],
  clickPolygon: ({ coord: { x, y } }) =>
    set((state) => ({
      polygon: `${state.polygon}, ${x} ${y}`,
      marker: [...state.marker, { lng: x, lat: y }],
    })),
  closePolygon: () =>
    set((state) => ({
      polygon: `${state.polygon}, ${state.polygon.split(',')[1].trim()}`,
    })),
  resetPolygon: () => set({ polygon: '', marker: [] }),
}));

export default useStore;
