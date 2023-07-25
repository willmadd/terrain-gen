import Scene from "../components/Scene";
import { generateId } from "@/helpers";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  const rndId = generateId(8);

  return (
    <main className="flex min-h-screen flex-col items-end justify-start h-screen">
      {/* <div className="z-10 mr-10 mt-10 text-center p-12 bg-[rgba(36,36,36,0.9)] rounded-md shadow-2xl  w-full border border-black border-solid"> */}

      {/* // */}

      <section className="bg-white dark:bg-gray-900 mt-12">
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
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      {/* <div
        className={"bg-white mt-4 rounded-md shadow-md p-2 h-12"}
        > */}
      <a
        href={`/generate/${rndId}`}
        className={
          "bg-white mt-8 rounded-md shadow-md p-2 h-12 block flex items-center justify-center"
        }
      >
        Generate Terrain
      </a>
      {/* </div> */}
      {/* </div> */}
      <img
        className=" absolute -z-10 object-cover h-full"
        src={"/images/terrain2.webp"}
        alt={"3d image of some low poly terrain"}
      />
    </main>
  );
}
