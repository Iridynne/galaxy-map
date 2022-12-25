import React from 'react';
import { MeshLambertMaterialProps, useFrame } from '@react-three/fiber';
import { Mesh, Vector3Tuple } from 'three';
import GalaxyCamera from '../camera/GalaxyCamera';

export type BodyProps = {
    name: string,
    size: number,
    mass: number,
    position?: Vector3Tuple,
    velocity?: Vector3Tuple,
    materialProps?: MeshLambertMaterialProps,
    rotationPeriod: number,
    castShadow?: boolean,
    receiveShadow?: boolean,
};

const Body = ({
    name,
    size,
    mass,
    rotationPeriod,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    materialProps,
    castShadow = false,
    receiveShadow = false,
}: BodyProps) => {
    const mesh = React.useRef<Mesh>(null);

    useFrame(() => {
        if (!mesh.current) return;

        mesh.current.rotation.y += 1 / rotationPeriod * Math.pow(10, -3);
    });

    return (
        <>
            <GalaxyCamera makeDefault={name === "Mercury"} target={position} />
            <mesh
                ref={mesh}
                position={position}
                castShadow={castShadow}
                receiveShadow={receiveShadow} >
                <sphereBufferGeometry
                    attach="geometry"
                    args={[size]} />
                <meshLambertMaterial
                    attach="material"
                    color="white"
                    {...materialProps} />
            </mesh>
        </>
    );
}

export default Body;