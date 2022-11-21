import styles from './styles.module.css';

import checkedIcon from '../assets/checked.svg';
import trashIcon from '../assets/trash.svg';
import uncheckIcon from '../assets/uncheck.svg';
import { TaskProps } from '../@types/task';

export const Task = ({
  id,
  title,
  completeTask,
  removeTask,
  checked = false,
}: TaskProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.checkTask} onClick={() => completeTask(id)}>
        {checked ? (
          <img src={checkedIcon} alt="" />
        ) : (
          <img src={uncheckIcon} alt="" />
        )}
      </button>

      <p className={checked ? styles.taskComplete : styles.task}>{title}</p>

      <button className={styles.trashButton} onClick={() => removeTask(id)}>
        <img src={trashIcon} alt="" />
      </button>
    </div>
  );
};
