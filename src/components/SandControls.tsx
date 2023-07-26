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
    <div className="bg-[#AFCBFF] rounded-md p-2">
      <button
        onClick={() => setMenuOpen((prev) => ({ ...prev, sand: !prev.sand }))}
        aria-label={"open environment options"}
        className="flex justify-between w-full"
      >
        <h2 className="text-lg text-[#171219]">Sand</h2>
        {/* <FaChevronDown /> */}
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
            <div className="">
              <div>
                <label className="relative inline-flex items-center mb-5 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!sandSolidColor}
                    onChange={(e) =>
                      updateValue("sandSolidColor", !sandSolidColor)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-[#171219]">
                    Solid Colour
                  </span>
                </label>
              </div>
              <AnimatePresence>
                {!sandSolidColor && (
                  <motion.div
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
                    <label className="text-[#171219] flex items-center">
                      <input
                      className="mr-4"
                        type={"color"}
                        value={sandColor}
                        onChange={(e) =>
                          updateValue("sandColor", e.target.value)
                        }
                        />
                        Colour
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
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
    </div>
  );
};

export default SandControls;
