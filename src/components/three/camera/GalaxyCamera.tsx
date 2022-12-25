import React from 'react';

import { OrbitControls } from '@react-three/drei';
import PostProcess from './PostProcess';

const GalaxyCamera = () => {
    return (
        <>
            <OrbitControls
                makeDefault
                minDistance={150}
                maxDistance={1000}
                zoomSpeed={2}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={2 *Math.PI / 3}
            />
            <PostProcess />
        </>
    );
};

export default GalaxyCamera;