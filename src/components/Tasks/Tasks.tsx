import style from './Tasks.module.css';

export function Tasks(){
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
                <h2>vasco</h2>
            </div> 
        </div>
    )
}