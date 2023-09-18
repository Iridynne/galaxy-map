import { ReactElement, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

type CanvasProps = {
    children: ReactNode | ReactNode[]
}

const GMCanvas = ({ children }: CanvasProps) => (
    <Canvas className='bg-blue-500'>
        {children}
    </Canvas>
)

export default GMCanvas