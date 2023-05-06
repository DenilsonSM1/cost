import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButtom from '../form/SubmitButtom';
import styles from './ProjectForm.module.css'
function ProjectForm({btnText}) {
    return (

        <form className={styles.form}>
            <Input type='text' text="Nome do Projeto" placeholder='Escreva o Projeto' name="name" />

            <Input type='text' text="Orçamento do Projeto " placeholder='Escreva' name="ValorTot" />


            <Select name='category_id' text='Selecione a categoria' />
            <SubmitButtom text={btnText} />
        </form>

    )
}
export default ProjectForm;