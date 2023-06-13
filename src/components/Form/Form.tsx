import style from './Form.module.css';
import { useState, useEffect } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

type TaskType = {
    id: number,
    task: string,
}

export function Form(){
    const [inputTask, setInputTask] = useState<string>('');
    const [tasks, setTasks] =useState<TaskType[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const newTask: TaskType = {
          id: tasks.length + 1,
          task: inputTask,
        }
      
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setInputTask('');
      
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      };
      
      useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        const tasksFromLocalStorage: TaskType[] = savedTasks ? JSON.parse(savedTasks) : [];
        setTasks(tasksFromLocalStorage);
      }, []);
      

    const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTask(event.target.value);
    };
    return(
        <form onSubmit={handleSubmit} className={style.inputContainers}>
            <input 
                type="text" 
                className={style.inputText}
                value={inputTask}
                onChange={handleTask}
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