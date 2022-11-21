export interface ITask {
  id: string;
  title: string;
  status: boolean;
}

export interface ITasks {
  tasks: ITask[];
}

export type NewTaskFormProps = {
  addTask: (taskTitle: string) => void;
};

export interface TaskProps {
  id: number;
  checked?: boolean;
  title: string;
  completeTask: (id: number) => void;
  removeTask: (id: number) => void;
}

export interface ITasksProps {
  tasks: ITask[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}
