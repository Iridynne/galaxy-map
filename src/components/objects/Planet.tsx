import { Vector3 } from "@react-three/fiber";

type PlanetProps = {
    size: Number,
    position: Vector3,
};

const Planet = ({
    size,
    position
}: PlanetProps) => {
  return (
    <mesh position={position}>
      <sphereBufferGeometry attach="geometry" args={[size]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default Planet;