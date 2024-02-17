
export async function getTasks(prisma) {
    const tasks = await prisma.task.findMany();
    console.log('Get Tasks');
    return tasks;
}

export async function createTask(prisma, taskTitle) {
    const task = await prisma.task.create({
        data: {
            taskTitle: taskTitle,
        },
    })
    console.log(`Create Task: ${taskTitle}`);
    return task;
}

export async function updateTask(prisma, taskId, isCompleted) {
    try {
        const task = await prisma.task.update({
            where: {id: Number(taskId)},
            data: {
                isComplete: isCompleted
            },
        })
        console.log(`Update Task: ${taskId}`);
        return task;
    } catch (error) {
        return {error: `Task with ID ${taskId} does not exist in the database`};
    }
}

export async function deleteTask(prisma, taskId) {
    await prisma.task.delete({
        where: {
            id: Number(taskId),
        },
    })
    console.log(`Deleted Task: ${taskId}`)
}
