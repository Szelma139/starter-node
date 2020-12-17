import '@styles/globals.css'
import '@styles/skeleton.css'
import '@styles/normalize.css';
import '@styles/componentStyles.css';

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
