import '../styles/scss/globals.css'
import '../styles/scss/Header.scss'
import '../styles/scss/Main.scss'
import '../styles/scss/Footer.scss'
import '../styles/scss/Modal.scss'
import { pstore, wrapper } from '../store';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const persistor = persistStore(pstore);
  const { props } = wrapper.useWrappedStore(pageProps);
  return (
    <SessionProvider session={session}>
      <Provider store={pstore}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp;
