import styles from './styles.module.scss'
import Link from 'next/link'
import { AuthContext } from '@/contexts/AuthContext'

import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'

export const Header: React.FC = () => {
    const { signOut } = useContext(AuthContext)

    return (
        <header className={styles.header_container}>
            <div className={styles.header_content}>
                <Link href="/dashboard">
                    <img src='/logo.svg' width={190} height={60} />
                </Link>

                <nav className={styles.nav}>
                    <Link href="/category">
                        Categoria
                    </Link>

                    <Link href="/product">
                        Cardápio
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut size={24} color="#fff" />
                    </button>
                </nav>
            </div>
        </header>
    )
}