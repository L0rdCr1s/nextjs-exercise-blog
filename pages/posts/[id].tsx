import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";

export default function FirstPost() {
  return (
    <Layout home={false}>
      <h1>heading</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
