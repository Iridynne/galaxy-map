import React from "react";

export default function Planet(props) {
  return (
    <mesh position={props.position}>
      <sphereBufferGeometry attach="geometry" args={[props.size]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}
