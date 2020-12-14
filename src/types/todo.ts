export enum TodoStatus {
  CLOSE = "closed",
  OPEN = "open",
}

export interface ITodo {
  name: string;
  description: string;
  status: TodoStatus;
}
