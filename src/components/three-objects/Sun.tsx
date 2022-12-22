import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Size, SizeType } from "../../helpers/Enums";

type SunProps = {
    sizeUnit: SizeType,
    sizeMultiplier: number,
};

const Sun = ({
    sizeUnit,
    sizeMultiplier
}: SunProps) => {
  const colorMap = useLoader(TextureLoader, "/images/sun.jpg");

  const actualSize: Number = Size[sizeUnit] * sizeMultiplier;

  return (
    <>
      <pointLight
        intensity={1}
      />
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[actualSize]} />
        <meshLambertMaterial
          attach="material"
          emissive="white"
          emissiveMap={colorMap}
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
};

export default Sun;