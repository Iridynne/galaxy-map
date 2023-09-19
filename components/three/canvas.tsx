import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

type CanvasProps = {
    children: ReactNode | ReactNode[]
}

const GMCanvas = ({ children }: CanvasProps) => (
    <Canvas className='bg-gray-900'>
        {children}
    </Canvas>
)

export default GMCanvas