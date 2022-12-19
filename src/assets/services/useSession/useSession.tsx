import React from 'react';
import { FixedLengthArray } from '../types/FixedLengthArray';

type SessionContext = {
    position: FixedLengthArray<Number, 3>,
};
const sessionContext = React.createContext({} as SessionContext);

export const useSession = () => React.useContext(sessionContext);

const useProvideSession = (): SessionContext => {
    const [position, setPosition] = React.useState([0, 0, 0] as FixedLengthArray<Number, 3>);

    return {
        position,
    };
};

export const ProvideSession = ({ children }: {children: React.ReactNode}) => {
    const sessionProvider = useProvideSession();
    return <sessionContext.Provider value={sessionProvider}>{children}</sessionContext.Provider>
}
