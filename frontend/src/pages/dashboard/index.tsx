import { Header } from "@/components/Header";
import { canSSRAuth } from "@/utils/canSSRAuth";
import Head from "next/head";
import styles from "./styles.module.scss";
import { FiRefreshCcw } from "react-icons/fi";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - DevPizza</title>
      </Head>
      <Header />
      <main className={styles.cotainer}>
        <div className={styles.container_header}>
          <h1>Últimos pedidos</h1>
          <button>
            <FiRefreshCcw size={25} color="#3fffa3" />
          </button>
        </div>

        <article className={styles.list_orders}>
          <section className={styles.order_item}>
            <button>
              <div className={styles.tag}></div>
              <span>Mesa 60</span>
            </button>
          </section>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
