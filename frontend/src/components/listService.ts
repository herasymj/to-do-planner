import { AxiosInstance } from 'axios';

export interface Task {
  id?: number;
  taskTitle: string;
  isComplete: boolean;
}

export async function createTaskService(axios: AxiosInstance, taskTitle: string) {
  try {
    const newTask = await axios.post(axios.defaults.baseURL + '/task', {taskTitle: taskTitle});
    return newTask.data;
  } catch {
    console.log('Error creating task');
  }
}

export async function getTasksService(axios: AxiosInstance) {
  try {
    const list = await axios.get(axios.defaults.baseURL + '/task');
    return list.data;
  } catch {
    console.log('Error getting tasks');
  }
}

export async function updateTaskService(axios: AxiosInstance, task: Task) {
  try {
    const updatedTask = await axios.put(axios.defaults.baseURL + '/task/' + task.id, task)
    return updatedTask.data;
  } catch {
    console.log('Error updating task');
  }
}

export function deleteTaskService(axios: AxiosInstance, taskId: number) {
  try {
    void axios.delete(axios.defaults.baseURL + '/task/' + taskId);
  } catch {
    console.log('Error deleting task');
  }
}
