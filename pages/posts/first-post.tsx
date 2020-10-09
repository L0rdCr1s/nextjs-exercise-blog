import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Fist post</title>
      </Head>
      <h1>First post</h1>
      <Link href="/">
        <a>Go back to home page</a>
      </Link>
    </Layout>
  );
}
