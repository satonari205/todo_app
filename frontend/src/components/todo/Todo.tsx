import { FC } from "react"
import { Task } from "../../types/ITasks";

const Todo: FC<Task> = ({ title, done }) => {
  const dummy = () => { alert('not yet'); };

  return (
    <>
      <tr className="hover:bg-gray-100 text-lg">
        <th className="w-3/4">{title}</th>
        <td>
          <button
            className="btn btn-sm btn-success btn-outline"
            onClick={dummy}
          >
            Completed
          </button>
        </td>
        <td>
          <button
            className="btn btn-sm btn-error btn-outline"
            onClick={dummy}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Todo;