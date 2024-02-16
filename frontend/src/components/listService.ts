export interface Task {
  id?: number;
  itemTitle: string;
  isComplete: boolean;
}

export async function createTask(itemTitle: string) {
  // await prisma.listItem.create({
  //   data: {
  //     itemTitle: itemTitle
  //   }
  // }).then((listItem) => {
  //   const task: Task = {
  //     id: listItem.id,
  //     itemTitle: listItem.itemTitle,
  //     isComplete: listItem.isComplete
  //   }
  //   return task
  // })
}

export async function getTasks() {

}

export async function updateTask(task: Task) {

}

export async function deleteTask(taskId: string) {

}
