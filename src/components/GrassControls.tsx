import React from "react";
import { useTerrainConfigStore } from "@/store";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { WaterControlsProps } from "../types";

type Props = {};

const GrassControls: React.FC<WaterControlsProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const { grassColor, grassSolidColor, updateValue } = useTerrainConfigStore();

  return (
    <>
      <button
        onClick={() =>
          setMenuOpen((prev) => ({ ...prev, grass: !prev.grass }))
        }
        aria-label={"open environment options"}
        className="flex justify-between w-full mt-4"
      >
        <h2 className="text-lg">Grass</h2>
        <FaChevronDown />
      </button>
      <AnimatePresence>
        {menuOpen.grass && (
          <motion.div
            key={"grassControls"}
            animate={{
              opacity: 1,

              height: "auto",
              transition: { opacity: { delay: 0.1 } },
            }}
            initial={{ opacity: 0, height: 0 }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { delay: 0.1 },
              },
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>
                  Solid Colour
                  <input type={"checkbox"} checked={grassSolidColor} 
                  onChange={(e) => updateValue('grassSolidColor',  !grassSolidColor)}
                  />
                </label>
                <label>
                  Grass Colour Colour
                  <input type={"color"} value={grassColor}                  
                   onChange={(e) => updateValue('grassColor',  e.target.value)}
/>
                </label>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <label>
                Noise Cycles
                <input
                  className="w-full p-1 rounded-sm text-black"
                  type="number"
                  value={noiseIterations}
                  onChange={(e) =>
                    updateValue("noiseIterations", e.target.value)
                  }
                />
              </label>
              <label className="flex flex-col items-center  text-center">
                Fog
                <input
                  className="mt-1"
                  type="checkbox"
                  id="fog"
                  name="fog"
                  checked={fog.on}
                  onChange={() => updateFog(fog.intensity, !fog.on)}
                />
              </label>
            </div>
            <div className={"grid grid-cols-2 gap-4 mt-4"}>
              <div>
                <label>
                  Amplitude
                  <input
                    className="w-full p-1 rounded-sm text-black"
                    type="number"
                    value={amplitude}
                    onChange={(e) => updateValue("amplitude", e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Frequency
                  <input
                    className="w-full p-1 rounded-sm text-black"
                    type="number"
                    value={frequency}
                    onChange={(e) => updateValue("frequency", e.target.value)}
                  />
                </label>
              </div>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GrassControls;
