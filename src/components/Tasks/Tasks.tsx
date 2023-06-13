import { useState, useEffect  } from 'react';
import clipboard from './../../assets/clipboard.svg';
import style from './Tasks.module.css';


type TaskType = {
    id: number,
    task: string,
}

export function Tasks(){
    const [tasks, setTasks] = useState<TaskType[]>([]);
    
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        const tasksFromLocalStorage: TaskType[] = savedTasks ? JSON.parse(savedTasks) : [];
        setTasks(tasksFromLocalStorage);
    }, []);
    
    return(
        <div className={style.tasksContainer}>
            <div className={style.infos}>
                <div className={style.tasksCreate}>
                    <p>Tarefas Criadas</p>
                    <span>0</span>
                </div>
                <div className={style.tasksComplete}>
                    <p>Concluidas</p>
                    <span>0</span>
                </div>     
            </div>
            <div className={style.tasks}>
               {tasks.length === 0 ? 
               (
                <div className={style.notTasks}>
                    <img src={clipboard} />
                   <span>Você ainda não tem tarefas</span>
                   <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
               )
                : 
                (
                 <div>{tasks.map((task) => (
                    <div key={task.id}>{task.task}</div>
                 ))}</div>
                )}
            </div> 
        </div>
    )
}