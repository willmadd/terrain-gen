import React from "react";
import { useTerrainConfigStore } from "@/store";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { WaterControlsProps } from "../types";

type Props = {};

const SkyControls: React.FC<WaterControlsProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const { rockColor, rockSolidColor, updateValue, sky } = useTerrainConfigStore();

  return (
    <div className="bg-[#AFCBFF] rounded-md p-2">
      {/* <button
        onClick={() =>
          setMenuOpen((prev) => ({ ...prev, grass: !prev.grass }))
        }
        aria-label={"open environment options"}
        className="flex justify-between w-full"
      > */}
      <h2 className="text-lg text-[#171219]">Sky</h2>
      {/* <FaChevronDown /> */}
      {/* </button> */}
      <AnimatePresence>
        {true && (
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
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  checked={sky==="sky"}
                  type="radio"
                  onChange={(e) => {
                    updateValue('sky','sky')
                  }}
                  value="sky"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Sky
                </label>
              </div>
              <fieldset
                // onChange={(e) => {
                //   updateValue('sky',e.target.name)
                // }}
                className="flex items-center"
              >
                <input
                  checked={sky==="night"}
                  id="default-radio-2"
                  onChange={(e) => {
                    updateValue('sky','night')
                  }}
                  type="radio"
                  value="night"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Night
                </label>
              </fieldset>
              <div className="flex items-center">
                <input
                  checked={sky==="color"}
                  id="default-radio-3"
                  type="radio"
                  onChange={(e) => {
                    updateValue('sky','color')
                  }}
                  value="colour"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Solid Colour
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
               checked={}={fog.on}
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

export default SkyControls;
