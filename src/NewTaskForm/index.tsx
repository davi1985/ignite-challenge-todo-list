import styles from './styles.module.css';

import plusIcon from '../assets/plus.svg';

export const NewTaskForm = () => {
  return (
    <form action="" className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar
        <img src={plusIcon} alt="" />
      </button>
    </form>
  );
};
