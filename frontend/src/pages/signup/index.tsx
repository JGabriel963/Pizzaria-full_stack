import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.scss'
import logo from '../../../public/logo.svg'
import { Input } from '@/components/ui/input'
import Button from '@/components/ui/button'

import Link from 'next/link'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>DevPizza | Cadastre-se</title>
      </Head>
      <div className={styles.container_center}>
        <Image src={logo} alt='Logo Sujeito Pizzaria' />

        <div className={styles.login}>
          <form>
          <Input 
              type='text'
              placeholder='Digite seu nome'
            />
            <Input 
              type='text'
              placeholder='Digite seu email'
            />
            <Input 
              type='password'
              placeholder='Digite sea senha'
            />

            <Button
              type='submit'
              Loading={false}
            >
              Cadastrar-se
            </Button>

            <Link href="/" className={styles.text}>
            Já possui uma conta? Faça login
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}