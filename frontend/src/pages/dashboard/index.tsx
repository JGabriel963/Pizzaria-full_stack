import { Header } from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - DevPizza</title>
      </Head>
      <Header />
      <main>
        <h1>Dashboard</h1>
      </main>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
