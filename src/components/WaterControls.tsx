import { useTerrainConfigStore } from "@/store";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import { WaterControlsProps } from "../types";

const WaterControls: React.FC<WaterControlsProps> = ({
  setMenuOpen,
  menuOpen,
}) => {
  const { updateValue, waterLevel, waterTemplate, waterColor, waterOpacity } =
    useTerrainConfigStore();

  return (
    <fieldset className="mt-0 bg-[#AFCBFF] rounded-md p-2 shadow-md">
      <button
        onClick={() => setMenuOpen((prev) => ({ ...prev, water: !prev.water }))}
        aria-label={"open water options"}
        className="flex justify-between w-full"
      >
        <h2 className="text-lg text-[#171219]">Water</h2>
        {/* <FaChevronDown /> */}
      </button>
      <AnimatePresence>
        {menuOpen.water && (
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
            <div>
              {/* <label>
                  Realistic Water
                  <input
                    type="checkbox"
                    id="water"
                    name="water"
                    checked={waterTemplate}
                    onChange={() => updateValue("waterTemplate", !waterTemplate)}
                  />
                </label> */}
              <label className="relative inline-flex items-center mb-5 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!waterTemplate}
                  onChange={() => updateValue("waterTemplate", !waterTemplate)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-[#171219]">
                  Solid Colour
                </span>
              </label>
            </div>
            <AnimatePresence>
              {!waterTemplate && (
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
                  <div className="flex items-center mb-4">
                    <label className="flex items-center text-[#171219]">
                      <input
                        className="mr-4"
                        type="color"
                        value={waterColor}
                        onChange={(e) =>
                          updateValue("waterColor", e.target.value)
                        }
                        />
                        Colour
                    </label>
                  </div>
                  <div>
                    <label className="text-[#171219]">
                      Water Opacity
                      <input
                        className="w-full p-1 rounded-sm text-black"
                        type="range"
                        min="0"
                        max="10"
                        value={waterOpacity}
                        onChange={(e) =>
                          updateValue("waterOpacity", e.target.value)
                        }
                      />
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div>
              <label className="text-[#171219]">
                Water Level
                <input
                  className="w-full p-1 rounded-sm text-black"
                  type="range"
                  min="-10"
                  max="30"
                  value={waterLevel}
                  onChange={(e) => updateValue("waterLevel", e.target.value)}
                />
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </fieldset>
  );
};

export default WaterControls;
