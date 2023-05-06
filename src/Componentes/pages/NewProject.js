import styles from './Newproject.module.css'
import ProjectForm from '../Projects/ProjectForm';
function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviço</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}
export default NewProject;