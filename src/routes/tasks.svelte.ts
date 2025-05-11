import type { Todos } from "$lib/types/task.type";

export let todos = $state<Todos>([
  {
    id: 0,
    title: "hello",
    completed: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, id.",
  },
  {
    id: 1,
    title: "hello",
    completed: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, id.",
  },
  {
    id: 2,
    title: "hello",
    completed: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, id.",
  },
  {
    id: 3,
    title: "hello",
    completed: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, id.",
  },
  {
    id: 4,
    title: "hello",
    completed: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, id.",
  },
]);