import styles from './Home.module.css';
import foto from '../image/savings.svg'
import Linkbuttom from '../layout/Linkbuttom';
function Home(){
    return(
        <section className={styles.Home_container}>
            <h1>Bem-Vindo ao <span>Cost</span></h1>
            <p>Começe a gerenciar seus projetos agora mesmo</p>

            <Linkbuttom  to='/newproject' text="Criar Projeto" />

            <img src={foto} alt='Foto'/>
        </section>
    )
}
export default Home;