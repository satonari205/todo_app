import { FC } from "react";
import Todo from "../components/todo/Todo";
import { Task } from "../types/ITasks";

type Todos = {
  todos: Task[];
}

const Todos: FC = () => {
  const todos = [
    { id: 1, title: "sample1" },
    { id: 2, title: "sample2" },
    { id: 3, title: "sample3" },
    { id: 4, title: "sample4" },
    { id: 5, title: "sample5" }
  ];

  return (
    <>
      <div className="flex gap-3 mx-auto min-w-xs mb-4">
        <input
          type="text"
          name="title"
          placeholder="What should I do?"
          className="input input-bordered w-4/5"
        />
        <button className="btn btn-primary btn-outline text-lg">add</button>
      </div>
      <div className="overflow-y-scroll"  style={{height:'70vh'}}>
        <table className="table">
          {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} done={todo.done}/>
          ))}
        </table>
      </div>
    </>
  );
}

export default Todos;