import { FC } from "react";
import Todo from "../components/todo/Todo";
import { Task } from "../types/ITasks";
import axois from "";

type Todos = {
  todos: Task[];
}

// axios Hooks まとめて、ビュッフェ。
// Custom Hook　の使いかた
// Axios の使い方
// Promise=>aynsc/awaitしっかり書く。

const Todos: FC = () => {
  const todos = //axois.get("/taksk");

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
          className="input input-bordered h-8 w-4/5"
        />
        <button className="btn btn-sm btn-primary">add</button>
      </div>
      <div className="overflow-y-scroll"  style={{height:'70vh'}}>
        <table className="table">
          {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title}/>
          ))}
        </table>
      </div>
    </>
  );
}

export default Todos;