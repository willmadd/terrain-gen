import React from "react";
import { useTerrainConfigStore } from "@/store";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { WaterControlsProps } from "../types";

type Props = {};

const SandControls: React.FC<WaterControlsProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const { sandColor, sandSolidColor, updateValue } = useTerrainConfigStore();

  return (
    <>
      <button
        onClick={() =>
          setMenuOpen((prev) => ({ ...prev, sand: !prev.sand }))
        }
        aria-label={"open environment options"}
        className="flex justify-between w-full mt-4"
      >
        <h2 className="text-lg">Sand</h2>
        <FaChevronDown />
      </button>
      <AnimatePresence>
        {menuOpen.sand && (
          <motion.div
            key={"waterControls"}
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
                  <input type={"checkbox"} checked={sandSolidColor} 
                  onChange={(e) => updateValue('sandSolidColor',  !sandSolidColor)}
                  />
                </label>
                <label>
                  Sand Colour Colour
                  <input type={"color"} value={sandColor}                  
                   onChange={(e) => updateValue('sandColor',  e.target.value)}
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

export default SandControls;
