import store from 'store'
import "../styles/index.scss";



function MyApp({ Component, pageProps }) {
  return (
  <store.Provider>
     <Component {...pageProps} />
  </store.Provider>
  )
}

export default MyApp;
