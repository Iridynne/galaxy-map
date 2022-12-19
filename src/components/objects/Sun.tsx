import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

type SunProps = {
    size: Number,
};

const Sun = ({
    size,
}: SunProps) => {
  // const textureLoader = useLoader(TextureLoader, "");

  return (
    <>
      <pointLight intensity={1} />
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[size]} />
        <meshLambertMaterial
          attach="material"
          color="orange"
          emissiveIntensity={1}
          emissive="red"
        />
      </mesh>
    </>
  );
};

export default Sun;