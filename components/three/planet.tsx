import { useTexture } from '@react-three/drei';
import React from 'react';
import { Vector3Tuple } from "three";

type PlanetProps = {
    size: number,
    position?: Vector3Tuple,
    texture?: string,
};

const GMPlanet = ({ size, position=[0, 0, 0], texture }: PlanetProps) => {
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
};

export default GMPlanet;