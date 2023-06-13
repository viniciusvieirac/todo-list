import clipboard from './../../assets/clipboard.svg';
import trash from './../../assets/trash.svg';
import style from './Tasks.module.css';


type TaskType = {
    id: number,
    task: string,
}

export function Tasks({ tasks }: { tasks: TaskType[] }){
  
    return(
        <div className={style.tasksContainer}>
            <div className={style.infos}>
                <div className={style.tasksCreate}>
                    <p>Tarefas Criadas</p>
                    <span>{tasks.length}</span>
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
                    <>
                {tasks.map((task) => (
                    <div key={task.id} className={style.taskList}>
                        <input type="checkbox" name="" id="" />
                        <p>{task.task}</p>
                        <button type='button'>
                            <img src={trash} />
                        </button>
                    </div>
                 ))}
                    </>
                )}
            </div> 
        </div>
    )
}