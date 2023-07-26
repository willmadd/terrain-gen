'use client'

import { generateId } from "@/helpers";
import React, { useState } from "react";
import { useTerrainConfigStore } from "@/store";
import WaterControls from "./WaterControls";
import {  MenuOpenProps } from '../types';
import EnvironmentControls from "./EnvironmentControls";
import SandControls from "./SandControls";
import GrassControls from "./GrassControls";
import RockControls from "./RockControls";
import SkyControls from "./SkyControls";
type Props = {};

const Controls: React.FC = (props: Props) => {
  const random = generateId(8);

  const {
    updateValue,
    height,
    width,
    resetTerrain,
  } = useTerrainConfigStore();

  const [menuOpen, setMenuOpen] = useState<MenuOpenProps>({
    water: true,
    environment: true,
    sand:true,
    grass:true
  });

  return (
    <div
      className={
        "z-10 absolute top-5 right-5 bg-[#225560] text-white p-3 rounded-md shadow-lg w-96"
      }
    >
      <h1 className={"text-white text-xl"}>Terrain Customisations</h1>

      <hr />
      <div className="grid grid-cols-2 gap-3 my-4">
        <SkyControls menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <WaterControls  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <SandControls menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <GrassControls menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <RockControls menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      </div>
      <hr />
      <EnvironmentControls  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <hr className="mt-4" />
      <hr className="mt-4" />
      <div className="mt-2">
        <div className="grid grid-cols-2 gap-4">
          <label>
            Width
            <input
              type="number"
              onChange={(e) => updateValue("width", e.target.value)}
              className="w-full p-1 rounded-sm text-black"
              value={width}
            />
          </label>
          <label>
            Height
            <input
              className="w-full p-1 rounded-sm text-black"
              type="number"
              onChange={(e) => updateValue("height", e.target.value)}
              value={height}
            />
          </label>
        </div>
        <a
          className="flex justify-center p-2 items-center mt-4 bg-white rounded-md"
          href={`/generate`}
        >
          <span className="text-slate-800">Generate New</span>
        </a>
        <div className="grid grid-cols-2 col-4 mt-4">
          <button className=" underline">Download</button>
          <button className=" underline" onClick={() => resetTerrain()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
