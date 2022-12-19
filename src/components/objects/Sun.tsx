type SunProps = {
    size: Number,
};

const Sun = ({
    size,
}: SunProps) => {
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