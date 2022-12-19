import Sun from "./Sun";
import Planet from "./Planet";

export default function System() {
  return (
    <>
      <ambientLight intensity={0.05} />
      <Sun size={1} />
      <Planet size={0.0038} position={[1.5, 0, 0]} />
      <Planet size={0.009} position={[2, 0, 0]} />
      <Planet size={0.01} position={[2.5, 0, 0]} />
      <Planet size={0.005} position={[3, 0, 0]} />
      <Planet size={0.11} position={[3.5, 0, 0]} />
      <Planet size={0.095} position={[4, 0, 0]} />
      <Planet size={0.04} position={[4.5, 0, 0]} />
      <Planet size={0.0018} position={[5, 0, 0]} />
    </>
  );
}