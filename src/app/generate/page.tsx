'use client'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import WorldMaker from "../../components/WorldMaker";
import { OrbitControls, PerspectiveCamera, Sky, Stars } from "@react-three/drei";
import Controls from "../../components/Controls";
import { useTerrainConfigStore } from "@/store";

type WorldGenerationProps = {
  params: {
    id: string;
  };
};

const MapPage = ({ params }: WorldGenerationProps) => {
  const {  sky } = useTerrainConfigStore();

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
         {sky==="sky"? <Sky />:sky==="night"?<Stars />:<Stars />}
          
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
