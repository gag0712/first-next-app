import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import withRedux from 'next-redux-wrapper';
import configureStore from '../store';
import { useDispatch, useSelector } from 'react-redux';


function MyApp({ Component, pageProps }: AppProps) {
  const count = useSelector(state => state.count); 
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/post">
            <a>Blog Post</a>
          </Link>
        </li>
        <li>{count}</li>
      </ul>
      <Component {...pageProps} />
    </>
  )
}
export default withRedux(configureStore)(MyApp)
