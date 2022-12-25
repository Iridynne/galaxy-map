import React from 'react';
import { useLoader } from '@react-three/fiber';
import { PointLight, TextureLoader } from 'three';
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

    const lightRef = React.useRef<PointLight>(null);

    // Adjust shadow resolution
    React.useLayoutEffect(() => {
        if (!lightRef.current) return;

        lightRef.current.shadow.mapSize.width = 2048;
        lightRef.current.shadow.mapSize.height = 2048;
    });

    return (
        <>
            <pointLight
                ref={lightRef}
                position={position}
                intensity={1}
                castShadow
            />
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