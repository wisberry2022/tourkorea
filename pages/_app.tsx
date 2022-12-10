import '../styles/scss/globals.css'
import '../styles/scss/Header.scss'
import '../styles/scss/Main.scss'
import '../styles/scss/Footer.scss'
import '../styles/scss/Modal.scss'
import '../styles/scss/sub.scss'
import { pstore, wrapper } from '../store';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const persistor = persistStore(pstore);
  const { props } = wrapper.useWrappedStore(pageProps);
  return (
    <>
      <Script src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`}></Script>
      <SessionProvider session={session}>
        <Provider store={pstore}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...props.pageProps} />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  )
}

export default MyApp;
