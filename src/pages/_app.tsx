import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store, { wrapper } from '@redux/store';
import '../styles/components/normalize.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
