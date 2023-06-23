import clipboard from './../../assets/clipboard.svg';
import trash from './../../assets/trash.svg';
import style from './Tasks.module.css';

type TaskType = {
    id: number,
    task: string,
    isChecked: boolean,
}

type TaskProps = {
    tasks: TaskType[],
    handleTaskCheck: (taskId: number) => void,
    handleDeleteTask: (id: number) => void,
    completedTasks: number,
}

export function Tasks({ tasks, handleTaskCheck, handleDeleteTask, completedTasks }: TaskProps) {
    return (
        <div className={style.tasksContainer}>
            <div className={style.infos}>
                <div className={style.tasksCreate}>
                    <p>Tarefas Criadas</p>
                    <span>{tasks.length}</span>
                </div>
                <div className={style.tasksComplete}>
                    <p>Concluidas</p>
                    <span>{`${completedTasks} de ${tasks.length}`}</span>
                </div>
            </div>
            <div className={style.tasks}>
                {tasks.length === 0 ? (
                    <div className={style.notTasks}>
                        <img src={clipboard} alt="clipboard" />
                        <span>Você ainda não tem tarefas</span>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                ) : (
                    <>
                        {tasks.map((task) => (
                            <div key={task.id} className={task.isChecked ? style.taskCheck : style.taskList}>
                                <input
                                    type="checkbox"
                                    checked={task.isChecked}
                                    onChange={() => handleTaskCheck(task.id)}
                                />
                                <p
                                 >{task.task}</p>
                                <button
                                    onClick={() => handleDeleteTask(task.id)}
                                    type="button">
                                    <img src={trash} alt="trash" />
                                </button>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
