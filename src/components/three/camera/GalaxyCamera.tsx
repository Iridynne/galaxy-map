import React from 'react';

import { OrbitControls } from '@react-three/drei';
import { Vector3Tuple } from 'three';

type GalaxyCameraProps = {
    makeDefault?: boolean,
    target: Vector3Tuple,
};

const GalaxyCamera = ({
    makeDefault = false,
    target
}: GalaxyCameraProps) => {
    return (
        <>
            {
                makeDefault && (
                    <OrbitControls
                        makeDefault
                        target={target}
                        minDistance={1}
                        maxDistance={1000}
                        rotateSpeed={1}
                        zoomSpeed={1}
                        enablePan={false}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={2 *Math.PI / 3} />
                )
            }
        </>
    );
};

export default GalaxyCamera;