import React from 'react';
import { MeshLambertMaterialProps } from '@react-three/fiber';
import { Vector3Tuple } from 'three';

export type BodyProps = {
    size: number,
    mass: number,
    position?: Vector3Tuple,
    velocity?: Vector3Tuple,
    materialProps?: MeshLambertMaterialProps,
};

const Body = ({
    size,
    mass,
    position=[0, 0, 0],
    velocity=[0, 0, 0],
    materialProps,
}: BodyProps) => {
    return (
    <mesh position={position}>
        <sphereBufferGeometry
            attach="geometry"
            args={[size]}
        />
        <meshLambertMaterial
            attach="material"
            color="white"
            {...materialProps}
        />
    </mesh>
    );
}

export default Body;