import { useTexture } from '@react-three/drei';
import React from 'react';
import { Vector3Tuple } from "three"

type StarProps = {
    size: number,
    position?: Vector3Tuple,
    color?: string,
    lightIntensity?: number,
}

const GMStar = ({ size, position=[0, 0, 0], color="white", lightIntensity=20 }: StarProps) => {
    const [ colorMap, lightMap ] = useTexture(['textures/star.jpg', 'textures/star_light.jpg'])

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
                lightMap={lightMap}
                lightMapIntensity={lightIntensity}
                color={color}
            />
        </mesh>
    );
}

export default GMStar