import { Vector3 } from '@react-three/fiber';
import React from 'react';

type SessionContext = {
    position: Vector3,
};
const sessionContext = React.createContext({} as SessionContext);

export const useSession = () => React.useContext(sessionContext);

const useProvideSession = (): SessionContext => {
    const [position, setPosition] = React.useState([0, 0, 0] as Vector3);

    return {
        position,
    };
};

export const ProvideSession = ({ children }: {children: React.ReactNode}) => {
    const sessionProvider = useProvideSession();
    return <sessionContext.Provider value={sessionProvider}>{children}</sessionContext.Provider>
}
