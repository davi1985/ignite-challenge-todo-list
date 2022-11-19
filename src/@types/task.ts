export interface ITask {
  id: number;
  title: string;
  status: boolean;
}

export interface ITasks {
  tasks: ITask[];
}
