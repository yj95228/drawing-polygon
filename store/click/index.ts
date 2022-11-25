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
  inputs: { [key: string]: string };
  searchCoordinates: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  clickPolygon: ({ coord: { x, y } }: Coord) => void;
  closePolygon: () => void;
  resetPolygon: () => void;
}
export const useStore = create<Store>((set) => ({
  polygon: '',
  marker: [],
  inputs: { lng: '', lat: '', lnglat: '', latlng: '' },
  searchCoordinates: (e) => {
    const { value, name } = e.target;
    set((state) => ({
      inputs:
        name === 'lng' || name === 'lat'
          ? {
              ...state.inputs,
              lnglat: '',
              latlng: '',
              [name]: value,
            }
          : {
              lng: '',
              lat: '',
              lnglat: '',
              latlng: '',
              [name]: value,
            },
    }));
  },
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
