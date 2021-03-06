import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar({ state = 1 }) {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.list_ul}>
                    <li className={`${styles.list_li_resize} ${state === 1 ? `${styles.active_ref}` : ''}`}><Link href="/"><a className={styles.nav_a}>Sobre mi</a></Link></li>
                    <li className={`${state === 2 ? `${styles.active_ref}` : ''}`}><Link href="/contactos"><a className={styles.nav_a}>Contactos</a></Link></li>
                </ul>
            </nav>
        </header >
    )
}