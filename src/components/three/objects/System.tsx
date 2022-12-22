import Planet from "./Planet";
import Sun from "./Sun";

export default function System() {
  return (
    <>
      <Sun mass={100} velocity={[0, 0, 0]} />
      <Planet mass={25} position={[5, 0, 0]} velocity={[1, 0, 0]} />
    </>
  );
}