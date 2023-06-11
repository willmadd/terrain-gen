'use client'
import React from 'react'
import { useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';


type Props = {}

const Scene = (props: Props) => {
  return (
    <>
    <ambientLight intensity={0.5}/>
    <spotLight position={[2,2,2]}/>
    <OrbitControls />
      <mesh>
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color={'#b8d292'}/>
      </mesh>
    </>
  )
}

export default Scene