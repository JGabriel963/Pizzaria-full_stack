import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/home.module.scss";
import logo from "../../../public/logo.svg";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthContext";

import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { toast } from "react-toastify";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (name == "" || email === "" || password === "") {
      toast.info("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    const data = {
      name,
      email,
      password,
    };

    await signUp(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>DevPizza | Cadastre-se</title>
      </Head>
      <div className={styles.container_center}>
        <Image src={logo} alt="Logo Sujeito Pizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleSignUp}>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Cadastrar-se
            </Button>

            <Link href="/" className={styles.text}>
              Já possui uma conta? Faça login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
