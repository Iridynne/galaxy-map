import { useTexture } from '@react-three/drei';
import React from 'react';
import { Vector3Tuple } from "three"

type BodyProps = {
    size: number,
    position?: Vector3Tuple,
    texture?: string,
}

const GMBody = ({ size, position=[0, 0, 0], texture }: BodyProps) => {
    const colorMap = useTexture(texture ?? 'textures/fallback.jpg')

    return (
        <mesh
            position={position}
        >
            <sphereGeometry
                attach="geometry"
                args={[size]}
            />
            <meshBasicMaterial
                attach="material"
                map={colorMap}
            />
        </mesh>
    );
}

export default GMBody