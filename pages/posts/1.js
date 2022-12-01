import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>#1</title>
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <h1>Donuts Yum Yum</h1>
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
    </Layout>
  );
}


// PAGE NO LONGER NEEDED ****************************