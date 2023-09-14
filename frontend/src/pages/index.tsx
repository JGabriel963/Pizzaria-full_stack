import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import logo from "../../public/logo.svg";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

import { AuthContext } from "@/contexts/AuthContext";

import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.warn("Preencha todos os campos!!");
      return;
    }

    setLoading(true);

    const data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>DevPizza | Faça seu login</title>
      </Head>
      <div className={styles.container_center}>
        <Image src={logo} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sea senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" Loading={loading}>
              Acessar
            </Button>

            <Link href="/signup" className={styles.text}>
              Não possui uma conta? Cadastre-se
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
