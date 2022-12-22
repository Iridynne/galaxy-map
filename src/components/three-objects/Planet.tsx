import { Vector3 } from "@react-three/fiber";
import { Size, SizeType } from "../../helpers/Enums";

type PlanetProps = {
    sizeUnit: SizeType,
    sizeMultiplier: number,
    position: Vector3,
};

const Planet = ({
    sizeUnit,
    sizeMultiplier,
    position
}: PlanetProps) => {
  const planetSize: Number = Size[sizeUnit] * sizeMultiplier;

  return (
    <mesh position={position}>
      <sphereBufferGeometry attach="geometry" args={[planetSize]} />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  );
}

export default Planet;