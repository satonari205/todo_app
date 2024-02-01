import useSWR from 'swr';
import api from './api';

const useTasks = () => {
  const fetcher = async () => {
    await api.get('tasks')
      .then((res) => {
        const todos = res.data;
        return todos.filter((todo) => !todo.done);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const { data, error, isLoading } = useSWR(`/tasks`, fetcher)

  return {
    tasks: data,
    isLoading,
    isError: error
  };
}

export default useTasks;