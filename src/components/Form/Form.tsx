import style from './Form.module.css'
import { IoMdAddCircleOutline } from 'react-icons/io';


export function Form(){
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