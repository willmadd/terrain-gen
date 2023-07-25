"use client";
import Scene from "../../../components/Scene";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useEffect, useRef } from "react";
import { Group, Mesh } from "three";
import { createNoise2D } from "simplex-noise";
import alea from "alea";
import * as THREE from "three";
import WorldMaker from "../../../components/WorldMaker";
import { OrbitControls, PerspectiveCamera, Sky, Stars } from "@react-three/drei";
import Controls from "../../../components/Controls";

type WorldGenerationProps = {
  params: {
    id: string;
  };
};

const MapPage = ({ params }: WorldGenerationProps) => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center h-screen bg-black">
      <Controls />
      <Suspense
        fallback={
          <h1>Loading... Loading... Loading... Loading... Loading...</h1>
        }
      >
        <Canvas shadows>
          <OrbitControls />
          <PerspectiveCamera position={[200, 5, 100]} makeDefault/>
          <ambientLight intensity={0.2}/>
          <Sky />
          
           {/* <Stars /> */}
          <spotLight position={[-250,50,50]} castShadow/>
          <WorldMaker id={params.id}/>
  {/* <TestBuffer /> */}
        </Canvas>
      </Suspense>
    </main>
  );
};

export default MapPage;
