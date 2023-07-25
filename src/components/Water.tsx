import { useRef, useMemo } from "react";
import {
  useThree,
  useLoader,
  useFrame,
  PrimitiveProps,
  extend,
  ReactThreeFiber
} from "@react-three/fiber";
import * as THREE from "three";
// import waterNormalsSrc from "/public/images/waternormal3.jpeg";
import { Water } from "three-stdlib";
import { useTerrainConfigStore } from "@/store";

extend({ Water });

declare global {
  namespace JSX {
    interface Intrinsicelements {
      water: ReactThreeFiber.Object3DNode<Water, typeof Water>;
    }
  }
}





const Ocean = () => {
  const ref = useRef<PrimitiveProps>(null);
  const gl = useThree((state) => state.gl);
  const { waterLevel, waterTemplate, waterColor, waterOpacity, height, width } =
    useTerrainConfigStore();

  const waterNormals = useLoader(THREE.TextureLoader, '/images/waternormal3.jpeg');
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(width, height), [width, height]);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: "yellow",
      waterColor: 0x064273,
      distortionScale: 2,
      fog: false,
      //   format: gl.encoding,
    }),
    [waterNormals]
  );

  // console.log(waterOpacity)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value += delta / 4;
    }
  });
  return (
    <>
      {waterTemplate ? (
        <water
          position={[0, waterLevel - 10, 0]}
          ref={ref}
          args={[geom, config]}
          rotation-x={-Math.PI / 2}
          transparent
          opacity={0.5}
        />
      ) : (
        <mesh
          position={[0, waterLevel-10, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
        >
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial
            color={waterColor}
            transparent
            opacity={waterOpacity/10}
          />
        </mesh>
      )}
    </>
  );
};

export default Ocean;
