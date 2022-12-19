type PlanetProps = {
    size: Number,
    position: [Number, Number, Number],
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