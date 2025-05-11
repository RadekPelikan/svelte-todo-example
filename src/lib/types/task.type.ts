

export type Todo = {
  id: number,
  completed: boolean,
  title: string,
  description: string,
}

export type Todos = Array<Todo>

export type TodoProps = {
  todo: Todo
}