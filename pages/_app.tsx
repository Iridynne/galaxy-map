
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import '../styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout,
};

const MyApp = ({ Component, pageProps}: AppPropsWithLayout) => {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <Component {...pageProps} />
    );
};

export default MyApp;