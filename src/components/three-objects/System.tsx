import Sun from "./Sun";
import Planet from "./Planet";

export default function System() {
  return (
    <>
      <ambientLight intensity={0.05} />
      <Sun sizeUnit="Sun" sizeMultiplier={1} />
      <Planet sizeUnit="Earth" sizeMultiplier={0.38} position={[5, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={0.53} position={[10, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={1} position={[15, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={0.95} position={[20, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={3.88} position={[30, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={4} position={[40, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={9.45} position={[55, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={11.20} position={[80, 0, 0]} />
      <Planet sizeUnit="Earth" sizeMultiplier={0.18} position={[100, 0, 0]} />
    </>
  );
}