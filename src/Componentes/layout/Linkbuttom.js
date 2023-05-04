import { Link } from "react-router-dom";
import styles from './Linkbuttom.module.css';
function Linkbuttom({to, text}){
    return(
        <div>
            <Link to={to} className={styles.bnt}>{text}</Link>
        </div>

    )
}
export default Linkbuttom;