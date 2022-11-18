import '../styles/scss/globals.css'
import '../styles/scss/Header.scss'
import '../styles/scss/Main.scss'
import '../styles/scss/Footer.scss'
import '../styles/scss/Modal.scss'
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
