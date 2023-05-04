
function ProjectForm(){
    return(
        <div>
            <form >
                <div>
                    <input type='text'/>
                </div>
                <div>
                    <input type="Number"/>
                </div>
                <div>
                    <select name="category_id">
                        <option disabled>Selecione a categoria</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Criar Projeto"/>
                </div>
            </form>
        </div>
    )
}
export default ProjectForm;