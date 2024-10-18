declare module '../store/apiSlice' {
    export const addSearch: (payload: any) => { type: string, payload: any };
    export const removeSearch: () => { type: string };
}
  