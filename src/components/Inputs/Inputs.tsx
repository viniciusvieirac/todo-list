import style from './Inputs.module.css'

export function Inputs(){
    return(
        <form className={style.inputContainers}>
            <input 
                type="text" 
                className={style.inputText}
                placeholder='Adicione uma tarefa'
            />
            <button>Criar</button>
        </form>
    )
}