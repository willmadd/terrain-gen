import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const TestBuffer = () => {
  const ref = useRef<THREE.Mesh>(null!);

  const vertices = new Float32Array([
    0.0,
    1.0,
    0.0, // vertex 0
    -1.0,
    -1.0,
    0.0, // vertex 1
    1.0,
    -1.0,
    0.0, // vertex 2
  ]);

  const cols = new Float32Array([
    0.0,
    1.0,
    1.0, // vertex 0
    0.0,
    0.5,
    0.0, // vertex 1
    1.0,
    0.0,
    0.2, // vertex 2
  ]);

  useEffect(() => {
    console.log(ref.current);
    const count = 3;
    ref.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(count * 3), 3)
    );

    for (let i = 0; i < (count || 0); i++) {
        ref.current?.geometry.attributes.color.setXYZ(i, 1, 0.4, 0);
      }
      ref.current.geometry.attributes.color.needsUpdate = true;
      ref.current.geometry.computeVertexNormals()

  }, []);
  return (
    <>
      {/* <mesh>
        <boxGeometry args={[1,1]}/>
        <meshStandardMaterial color={'red'}/>
    </mesh> */}
    {/* <ambientLight intensity={1}/> */}
      <mesh ref={ref}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            //   attachObject={['attributes', 'position']}
            attach="attributes-position"
            count={vertices.length / 3}
            array={vertices}
            itemSize={3}
          />
          {/* <bufferAttribute
                attach='attributes-color'
                array={cols}
                count={cols.length / 3}
                itemSize={3}
            /> */}
        </bufferGeometry>
        <meshStandardMaterial
          attach="material"
          side={THREE.DoubleSide}
          vertexColors={true}
        />
      </mesh>
    </>
  );
};
