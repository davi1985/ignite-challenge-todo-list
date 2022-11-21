import { FormEvent, useState } from 'react';
import { NewTaskFormProps } from '../@types/task';

import plusIcon from '../assets/plus.svg';

import styles from './styles.module.css';

export const NewTaskForm = ({ addTask }: NewTaskFormProps) => {
  const [task, setTask] = useState<string>('');

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    if (!task) return;

    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(ev) => setTask(ev.target.value)}
      />

      <button type="submit">
        Criar
        <img src={plusIcon} alt="" />
      </button>
    </form>
  );
};
