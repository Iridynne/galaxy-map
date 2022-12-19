import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

type SunProps = {
    size: Number,
};

const Sun = ({
    size,
}: SunProps) => {
  const emmisiveMap = useLoader(TextureLoader, "/assets/images/sun.jpg");

  return (
    <>
      <pointLight intensity={1} />
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[size]} />
        <meshLambertMaterial
          emissiveMap={emmisiveMap}
          emissiveIntensity={1}
          emissive="white"
        />
      </mesh>
    </>
  );
};

export default Sun;