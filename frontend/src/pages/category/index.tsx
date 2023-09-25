import { Header } from "@/components/Header"
import Head from "next/head"
import { ChangeEvent, FormEvent, useState } from "react"
import styles from './styles.module.scss'
import { toast } from "react-toastify"
import { setupAPIClient } from "@/services/api"

import { canSSRAuth } from "@/utils/canSSRAuth"

export default function Category() {
    const [name, setName] = useState('')

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if(name === "") {
            toast.info("Preencha o campo Categoria")
            return
        }

        const apiClient = setupAPIClient();
        await apiClient.post("/category", {
            name: name
        })

        toast.success("Categoria cadastrada com sucesso!")
        setName("")
    }

    function changeInput(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }


    return (
        <>
            <Head>
                <title>Nova categoria | DevPizza</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Cadastrar categorias</h1>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input 
                            type="text" 
                            placeholder="Digite o nome da categoria"
                            className={styles.input}
                            value={name}
                            onChange={changeInput}
                        />

                        <button className={styles.button}>
                            Cadastrar
                        </button>
                    </form>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    return {
        props: {}
    }

})