import { Vector3Tuple } from "three"

type BodyProps = {
    size: number,
    position?: Vector3Tuple
}

const GMBody = ({ size, position=[0, 0, 0] }: BodyProps) => (
    <mesh
        position={position}
    >
        <sphereGeometry
            attach="geometry"
            args={[size]}
        />
        <meshBasicMaterial
            attach="material"
            color="white"
        />
    </mesh>
)

export default GMBody