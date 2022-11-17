import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (<>
        <h1>test</h1>
    <Component {...pageProps}/>
    <h1>test2</h1>
    </>
    );
}