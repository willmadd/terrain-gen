import Scene from "../components/Scene";
import { generateId } from "@/helpers";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  const rndId = generateId(8);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start h-screen">
      {/* <div className="z-10 mr-10 mt-10 text-center p-12 bg-[rgba(36,36,36,0.9)] rounded-md shadow-2xl  w-full border border-black border-solid"> */}

      {/* // */}

      <section className="bg-white dark:bg-gray-900 mt-12 px-8 rounded-xl">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              FREE ONLINE LOW POLY TERRAIN MODEL CREATION
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Terrain Gen, your go-to destination for creating and downloading
              low poly terrain models. Create virtual landscapes with ease using
              our fully customisable terrain generation tool. Terrain Gen
              enables you to create terrain models that are downloadable as GLB
              files for free. Unleash your creativity and elevate your projects
              by starting to design terrain today.
            </p>

            <a
               href={`/generate`}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Generate Terrain
            </a>
            {/* <a
        href={`/generate`}
        className={
          "bg-white mt-8 rounded-md shadow-md p-2 h-12 block flex items-center justify-center"
        }
      >
        Generate Terrain
      </a> */}
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="/images/terrain3.webp"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      {/* <div
        className={"bg-white mt-4 rounded-md shadow-md p-2 h-12"}
        > */}
      {/* <a
        href={`/generate`}
        className={
          "bg-white mt-8 rounded-md shadow-md p-2 h-12 block flex items-center justify-center"
        }
      >
        Generate Terrain
      </a> */}
      {/* </div> */}
      {/* </div> */}
      <img
        className=" absolute -z-10 object-cover h-full w-full"
        src={"/images/terrain2.webp"}
        alt={"3d image of some low poly terrain"}
      />
    </main>
  );
}
