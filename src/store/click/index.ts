import create from 'zustand';

interface LngLat {
  x: string | number;
  y: string | number;
}
interface Coord {
  coord: LngLat;
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
  clickPolygon: ({ coord: { x: lng, y: lat } }) =>
    set((state) => ({
      polygon: `${state.polygon}, ${lng} ${lat}`,
      marker: [...state.marker, { x: lng, y: lat }],
    })),
  closePolygon: () =>
    set((state) => ({
      polygon: `${state.polygon}, ${state.polygon.split(',')[1].trim()}`,
    })),
  resetPolygon: () => set({ polygon: '', marker: [] }),
}));

export default useStore;
