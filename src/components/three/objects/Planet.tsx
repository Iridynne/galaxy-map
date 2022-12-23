import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Body, { BodyProps } from './Body';

export type PlanetProps = {
    textureFile: string,
} & BodyProps;

const Planet = ({
    size,
    mass,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    textureFile,
}: PlanetProps) => {
    const texture = useLoader(TextureLoader, `/textures/${textureFile}`);
    return (
        <Body
            size={size}
            mass={mass}
            position={position}
            velocity={velocity}
            materialProps={{
                map: texture,
            }}
        />
    );
}

export default Planet;