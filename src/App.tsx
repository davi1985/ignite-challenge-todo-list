import { tasks } from './data/tasks';
import { Header } from './Header';
import { NewTaskForm } from './NewTaskForm';
import { Tasks } from './Tasks';

export const App = () => {
  return (
    <>
      <Header />
      <NewTaskForm />

      <Tasks tasks={tasks} />
    </>
  );
};
