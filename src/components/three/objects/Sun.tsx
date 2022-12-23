import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Body, { BodyProps } from './Body';

type SunProps = {
    textureName: string,
} & BodyProps;

const Sun = ({
    size,
    mass,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    textureName,
}: SunProps) => {
    const texture = useLoader(TextureLoader, `/textures/${textureName}`);

    return (
        <>
            <pointLight intensity={1} />
            <Body
                size={size}
                mass={mass}
                position={position}
                velocity={velocity}
                materialProps={{
                    emissive: "white",
                    emissiveIntensity: 1,
                    emissiveMap: texture,
                    toneMapped: false
                }}
            />
        </>
    );
}

export default Sun;