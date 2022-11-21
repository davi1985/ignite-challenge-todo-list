import { useEffect, useState } from 'react';
import { ITask } from './@types/task';
import { Header } from './Header';
import { NewTaskForm } from './NewTaskForm';
import { Tasks } from './Tasks';

const LOCAL_STORAGE_KEY = 'tasks:savedTasks';

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved) {
      setTasks([...JSON.parse(saved)]);
    }
  };

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const setTasksAndSave = (newTasks: ITask[]) => {
    setTasks(newTasks);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = (taskTitle: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      status: false,
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask));

    setTasksAndSave([...tasks, newTask]);
  };

  const removeTask = (id: string) => {
    const tasksUpdated = tasks.filter((task) => task.id !== id);

    setTasksAndSave(tasksUpdated);
  };

  const completeTask = (id: string) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: !task.status,
        };
      }

      return task;
    });

    setTasksAndSave(tasksUpdated);
  };

  return (
    <>
      <Header />
      <NewTaskForm addTask={addTask} />

      <Tasks tasks={tasks} onComplete={completeTask} onDelete={removeTask} />
    </>
  );
};
