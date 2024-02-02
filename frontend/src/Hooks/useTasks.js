import useSWR from 'swr';
import api from './api';

const useTasks = () => {
  const getTasks = async () => {
    try {
      const res = await api.get('tasks');
      return res.data.filter((todo) => !todo.done);
    } catch(e) {
      throw new Error(e);
    }
  }

  const { data, error, isLoading } = useSWR(`/tasks`, getTasks);

  return {
    tasks: data,
    isLoading,
    isError: error
  };
}

export default useTasks;