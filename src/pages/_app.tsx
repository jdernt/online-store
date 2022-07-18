import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store, { loadState, wrapper } from '@redux/store';
import { setCart } from '@redux/actions/cartActions';
import '../styles/components/normalize.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const state = loadState();
    if (state && 'cart' in state) store.dispatch(setCart(state.cart))
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
