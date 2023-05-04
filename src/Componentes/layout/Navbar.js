import Container from "./Container";
import { Link } from 'react-router-dom';

import logo from '../image/logo.png';
import styles from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.navbar}>

            <Container>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/project">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar;