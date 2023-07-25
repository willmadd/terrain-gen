import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TerrainState {
  fog: { intensity: number; on: boolean };
  updateFog: (intensity: number, on: boolean) => void;
  updateValue:(name:string, value:any)=>void;
  noiseIterations:number;
  amplitude:number;
  frequency:number;
  waterLevel: number;
  waterTemplate: boolean,
  waterOpacity: number;
  waterColor: string;
  width:number;
  height:number;
  sandSolidColor: boolean;
  sandColor: string;
  grassSolidColor: boolean;
  grassColor: string;
  resetTerrain: ()=>void;
// waterColor: string
}

const initialState = {
    fog: { intensity: 100, on: true },
    noiseIterations: 8,
    amplitude:3,
    frequency:2,
    waterLevel:3,
    waterTemplate: true,
    waterOpacity: 0.7,
    waterColor: '#d4f1f9',
    width:400,
    height:400,
    sandSolidColor:true,
    sandColor: '#C2B280',
    grassSolidColor:true,
    grassColor: '#567d46',

}

export const useTerrainConfigStore = create<TerrainState>()(
  persist(
    (set) => ({
      ...initialState,
      updateFog: (intensity: number, on: boolean) =>
        set({ fog: { intensity, on } }),
        updateValue:(name, value)=>set((state)=>({...state, [name]:value})),
      resetTerrain: () => set(() => ({ ...initialState})),
    }),
    { name: "config-storage" }
  )
);
