import Todo from "../components/todo/Todo";
import useTasks from "../../api/useTasks";

// axios Hooks まとめて、ビュッフェ。
// Custom Hook　の使いかた
// Axios の使い方
// Promise=>aynsc/awaitしっかり書く。

export const Tasks = () => {
  const { tasks, isLoading, isError } = useTasks();

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
          {tasks
            ? tasks.map((todo) => (
            <Todo key={todo.id} title={todo.title}/>
            ))
            : null
        }
        </table>
      </div>
    </>
  );
}

export default Tasks;