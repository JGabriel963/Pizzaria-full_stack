import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import logo from '../../public/logo.svg'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevPizza | Faça seu login</title>
      </Head>
      <div className={styles.container_center}>
        <Image src={logo} alt='Logo Sujeito Pizzaria' />

        <div className={styles.login}>
          <form>
            <Input 
              type='text'
              placeholder='Digite seu email'
            />
            <Input 
              type='password'
              placeholder='Digite sea senha'
            />
          </form>
        </div>
      </div>
    </>
  )
}