import styles from './Cardapio.module.scss';
// import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Logo} from 'assets/logo.svg'; // configuração de um caminho inicial em "tsconfig.json" "baseUrl": "src"

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
        </main>
    )
}