import styles from './styles.module.css';

import checkedIcon from '../assets/checked.svg';
import uncheckIcon from '../assets/uncheck.svg';
import trashIcon from '../assets/trash.svg';

interface TaskProps {
  checked?: boolean;
  title: string;
}

export const Task = ({ checked = false, title }: TaskProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.checkTask}>
        {checked ? (
          <img src={checkedIcon} alt="" />
        ) : (
          <img src={uncheckIcon} alt="" />
        )}
      </button>

      <p className={checked ? styles.taskComplete : styles.task}>{title}</p>

      <button className={styles.trashButton}>
        <img src={trashIcon} alt="" />
      </button>
    </div>
  );
};
