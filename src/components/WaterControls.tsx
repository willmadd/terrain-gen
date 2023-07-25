import { useTerrainConfigStore } from "@/store";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import {WaterControlsProps} from '../src/types';

  const WaterControls: React.FC<WaterControlsProps> = ({
    setMenuOpen,
    menuOpen,
  }) => {
    const { updateValue, waterLevel, waterTemplate, waterColor, waterOpacity } =
      useTerrainConfigStore();

    return (
      <fieldset className="mt-0">
        <button
          onClick={() => setMenuOpen((prev) => ({ ...prev, water: !prev.water }))}
          aria-label={"open water options"}
          className="flex justify-between w-full my-4"
        >
          <h2 className="text-lg">Water</h2>
          <FaChevronDown />
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
                <label>
                  Colour
                  <input
                    type="color"
                    value={waterColor}
                    onChange={(e) => updateValue("waterColor", e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Realistic Water
                  <input
                    type="checkbox"
                    id="water"
                    name="water"
                    checked={waterTemplate}
                    onChange={() => updateValue("waterTemplate", !waterTemplate)}
                  />
                </label>
              </div>
              <label>
                Water Opacity
                <input
                  className="w-full p-1 rounded-sm text-black"
                  type="range"
                  min="0"
                  max="10"
                  value={waterOpacity}
                  onChange={(e) => updateValue("waterOpacity", e.target.value)}
                />
              </label>
              <div>
                <label>
                  Water Level
                  <input
                    className="w-full p-1 rounded-sm text-black"
                    type="range"
                    min="0"
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
  
  export default WaterControls