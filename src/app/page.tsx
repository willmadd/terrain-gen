'use client'
import Scene from "@/components/Scene";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-screen">
      <Suspense>
        <Canvas>
          <Scene />
        </Canvas>
      </Suspense>
    </main>
  );
}
