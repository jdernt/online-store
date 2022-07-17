import type { AppProps } from 'next/app';
import '../styles/components/normalize.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
