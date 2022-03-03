import React from "react";

export default function Sun(props) {
  return (
    <>
      <pointLight intensity={1} />
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[props.size]} />
        <meshLambertMaterial
          attach="material"
          color="orange"
          emissiveIntensity={1}
          emissive="red"
        />
      </mesh>
    </>
  );
}
