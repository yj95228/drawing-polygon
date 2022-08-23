import create from 'zustand';

export const useStore = create((set) => ({
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
