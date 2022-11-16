import '../styles/globals.css'
import '../styles/Header.scss'
import '../styles/Main.scss'
import '../styles/Footer.scss'
import '../styles/Modal.scss'
import { wrapper } from '../store';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default MyApp;
