import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Body, { BodyProps } from './Body';

type StarProps = {
    textureName: string,
} & BodyProps;

const Star = ({
    size,
    mass,
    rotationPeriod,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    textureName,
}: StarProps) => {
    const texture = useLoader(TextureLoader, `/textures/${textureName}`);

    return (
        <>
            <pointLight intensity={1} />
            <Body
                size={size}
                mass={mass}
                rotationPeriod={rotationPeriod}
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

export default Star;