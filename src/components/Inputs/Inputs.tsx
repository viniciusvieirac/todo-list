import style from './Inputs.module.css'
import { IoMdAddCircleOutline } from 'react-icons/io';


export function Inputs(){
    return(
        <form className={style.inputContainers}>
            <input 
                type="text" 
                className={style.inputText}
                placeholder="Adicione uma tarefa"
            />
            <button 
                type="submit"
            >
                Criar
                <IoMdAddCircleOutline 
                    style={{
                        marginLeft: '0.5rem',
                        height: '1rem',
                        width: '1rem',
                    }} 
                />
            </button>
        </form>
    )
}