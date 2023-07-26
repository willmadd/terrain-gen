'use client'

import { useMemo, useRef, useLayoutEffect, useEffect, useState } from "react";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";
import { terrainDimensions } from "@/store/controlsStore";
import Ocean from "./Water";
import { useProgress } from "@react-three/drei";
import { useTerrainConfigStore } from "@/store";
import { grassColors, rockColors, sandColors } from "@/helpers/constants";
// import * as THREE from 'three';
const Terrain = ({ id }: { id: string }) => {
  const ref = useRef<THREE.Mesh>(null);

  const {
    fog,
    noiseIterations,
    amplitude,
    frequency,
    height: h,
    width: w,
    sandSolidColor,
    sandColor,
    grassSolidColor,
    grassColor,
    rockSolidColor,
    rockColor,
  } = useTerrainConfigStore();
  const height = +h;
  const width = +w;

  const generatePositions = () => {
    // const vertices = [];
    if (ref.current) {
      const vertices = [];

      const heights = Array(width + 1)
        .fill(0)
        .map(() => Array(height + 1).fill(0));

      // console.log("h2", heights);

      const noise2D_main = createNoise2D();

      for (let g = 1; g < noiseIterations; g++) {
        for (let i = 0; i <= width; i++) {
          for (let j = 0; j <= height; j++) {
            const frequencyMultiplied = (frequency / 1000) * g;
            const mainNoiseVal =
              noise2D_main(i * frequencyMultiplied, j * frequencyMultiplied) *
              amplitude;

            const sqNoiseVal = mainNoiseVal * mainNoiseVal * mainNoiseVal;
            heights[i][j] = heights[i][j] + sqNoiseVal;
          }
        }
      }
      // console.log('hh>>',heights)

      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          const x = i;
          const z = j;

          const y00 = heights[i][j];
          const y01 = heights[i][j + 1];
          const y10 = heights[i + 1][j];
          const y11 = heights[i + 1][j + 1];

          vertices.push(
            new THREE.Vector3(x, y00, z),
            new THREE.Vector3(x, y01, z + 1),
            new THREE.Vector3(x + 1, y10, z),

            new THREE.Vector3(x + 1, y10, z),
            new THREE.Vector3(x, y01, z + 1),
            new THREE.Vector3(x + 1, y11, z + 1)
          );
        }
      }
      ref.current.geometry.setFromPoints(vertices);
      return vertices;
    }
    return [];
  };
  const [positions, setPositions] = useState([new THREE.Vector3()]);

  // console.log("xxyyzz", positions);

  const colourVertices = (vertices: any) => {
    if (ref.current) {
      const count = height * width * 6;

      const getRandomColor = (colors:number[][]) => {

        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      };

      ref.current.geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array((count || 0) * 3), 3)
      );
      for (let i = 0; i < (count || 0); i++) {
        const v = vertices[i];
        if (v.y > amplitude ** 3) {
          ref.current?.geometry.attributes.color.setXYZ(i, 1.0, 1.0, 1.0);
        } else if (v.y > 2.5) {
          //
          // console.log('1234',rockSolidColor)
          if(!rockSolidColor){
            const thing = rockColor.replace("#", "");
            const colorValue = parseInt(thing, 16);
            const fixedRockColour = new THREE.Color(colorValue);
            ref.current?.geometry.attributes.color.setXYZ(
              i,
              fixedRockColour.r,
              fixedRockColour.g,
              fixedRockColour.b
            );
          }else{
            const randomRockColor = getRandomColor(rockColors);
            ref.current?.geometry.attributes.color.setXYZ(
              i,
              randomRockColor[0],
              randomRockColor[1],
              randomRockColor[2]
            );
          }
          //
          // ref.current?.geometry.attributes.color.setXYZ(i, 0.2, 0.2, 0.2);
        } else if (v.y > -2) {
          if(!grassSolidColor){
            const thing = grassColor.replace("#", "");
            const colorValue = parseInt(thing, 16);
            const fixedGrassColour = new THREE.Color(colorValue);
            ref.current?.geometry.attributes.color.setXYZ(
              i,
              fixedGrassColour.r,
              fixedGrassColour.g,
              fixedGrassColour.b
            );
          }else{
            const randomGrassColor = getRandomColor(grassColors);
            ref.current?.geometry.attributes.color.setXYZ(
              i,
              randomGrassColor[0],
              randomGrassColor[1],
              randomGrassColor[2]
            );
          }
        } else {
          if (!sandSolidColor) {
            const thing = sandColor.replace("#", "");
            const colorValue = parseInt(thing, 16);
            const fixedSandColour = new THREE.Color(colorValue);
            ref.current?.geometry.attributes.color.setXYZ(
              i,
              fixedSandColour.r,
              fixedSandColour.g,
              fixedSandColour.b
            );
          } else {
            let randomSandColor = getRandomColor(sandColors);
            ref.current?.geometry.attributes.color.setXYZ(
              i,
              randomSandColor[0],
              randomSandColor[1],
              randomSandColor[2]
            );
          }
        }
      }
      ref.current.geometry.attributes.color.needsUpdate = true;
      ref.current.geometry.computeVertexNormals();
    }
  };


  useEffect(() => {
    if (ref.current) {
      const vers = generatePositions();
      setPositions(vers);
    }
  }, []);


  useEffect(() => {
    if (positions.length > 10) {
      colourVertices(positions);
    }
  }, [positions.length, sandSolidColor, sandColor, grassColor, grassSolidColor, rockColor, rockSolidColor]);

  return (
    <>
      <mesh
        ref={ref}
        position={[-width / 2, 0, -height / 2]}
        castShadow
        receiveShadow
      >
        <bufferGeometry />
        <meshStandardMaterial vertexColors={true} />
      </mesh>
      {fog.on ? <fog attach="fog" color="#e8e8e8" near={10} far={800} /> : null}
      <Ocean />
    </>
  );
};

export default Terrain;
