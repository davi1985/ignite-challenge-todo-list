import { ITasks } from '../@types/task';
import clipboardIcon from '../assets/clipboard.svg';
import { Task } from '../Task';

import styles from './styles.module.css';

export const Tasks = ({ tasks }: ITasks) => {
  const completedTasks = tasks.filter((task) => task.status);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <span>Tarefas criadas</span>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.tasksDone}>
          <span>Concluídas</span>
          <span>{completedTasks.length}</span>
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
          <Task key={task.id} title={task.title} checked={task.status} />
        ))}
      </div>

      <div className={styles.tasksList}></div>
    </div>
  );
};
