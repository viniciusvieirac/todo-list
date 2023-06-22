import style from './Form.module.css';
import { useState, useEffect } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Tasks } from '../Tasks/Tasks';

type TaskType = {
    id: number,
    task: string,
    isChecked: boolean,
}

export function Form(){
    const [inputTask, setInputTask] = useState<string>('');
    const [tasks, setTasks] =useState<TaskType[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const newTask: TaskType = {
          id: tasks.length + 1,
          task: inputTask,
          isChecked: false,
        }
        
        //tem que ser refatorado e por um aviso
        if(newTask.task === ''){
            return 
        }

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setInputTask('');
      
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      };
      
      useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        const tasksFromLocalStorage: TaskType[] = savedTasks ? JSON.parse(savedTasks) : [];
      
        // Atualiza isChecked com base nos valores salvos no localStorage
        const updatedTasks = tasksFromLocalStorage.map(task => ({
          ...task,
          isChecked: Boolean(task.isChecked),
        }));
      
        setTasks(updatedTasks);
      }, []);
      

    const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTask(event.target.value);
    };

    const handleTaskCheck = (taskId: number) => {
        const updatedTasks = tasks.map(task => {
          if (task.id === taskId) {
            return {
              ...task,
              isChecked: !task.isChecked,
            };
          }
          return task;
        });
        console.log('clicou');
        
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
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
            <Tasks tasks={tasks} handleTaskCheck={handleTaskCheck} />
        </form>
    )
}