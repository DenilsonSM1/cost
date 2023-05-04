import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaGithub />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Cost</span> &copy; 2023 
            </p>
        </footer>
    )
}
export default Footer;