import create from 'zustand';

export const useStore = create((set) => ({
  input: '',
  option: 'WKT',
  polygon: [],
  selectWKT: () => set({ option: 'WKT' }),
  selectJSON: () => set({ option: 'JSON' }),
  setInput: (event) => set({ input: event.target.value }),
  drawPolygon: (option, input) => {
    if (option === 'WKT') {
      set({ polygon: input.replace(/[^0-9\.\s,]/g, '').split(',') });
    } else {
      if (input) {
        set({ polygon: JSON.parse(input).coordinates[0] });
      }
    }
  },
  resetPolygon: (option) => {
    if (option === 'WKT') {
      set({ input: '', polygon: [] });
    } else {
      set({
        input: '',
        polygon: JSON.parse('{"coordinates":[[]]}').coordinates,
      });
    }
  },
}));

export default useStore;
