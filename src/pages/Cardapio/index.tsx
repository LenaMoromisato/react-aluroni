import styles from './Cardapio.module.scss';
// import logo from '../../assets/logo.svg'; -- importar para o reconhecimento do arquivo estático
import {ReactComponent as Logo} from '../../assets/logo.svg'; // converte svg em componete react

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                {
                    // <img src={logo} alt="logo do aluroni" />
                }
                <Logo />
            </nav>
        </main>
    )
}