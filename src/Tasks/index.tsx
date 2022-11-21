import { Task } from '../Task';
import { ITasksProps } from '../@types/task';

import clipboardIcon from '../assets/clipboard.svg';

import styles from './styles.module.css';

export const Tasks = ({ tasks, onComplete, onDelete }: ITasksProps) => {
  const completedTasks = tasks.filter((task) => task.status).length;
  const tasksQuantity = tasks.length;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <span>Tarefas criadas</span>
          <span>{tasksQuantity}</span>
        </div>

        <div className={styles.tasksDone}>
          <span>Concluídas</span>
          <span>{completedTasks}</span>
        </div>
      </header>

      {!tasks.length && (
        <div className={styles.emptyList}>
          <img src={clipboardIcon} alt="" />

          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}

      <div className={styles.tasks}>
        {tasks.map((task) => (
          <Task
            id={parseInt(task.id)}
            key={task.id}
            title={task.title}
            checked={task.status}
            completeTask={() => onComplete(task.id)}
            removeTask={() => onDelete(task.id)}
          />
        ))}
      </div>

      <div className={styles.tasksList}></div>
    </div>
  );
};
