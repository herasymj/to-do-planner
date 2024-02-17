import { PrismaClient } from '@prisma/client';
import { expect, test } from 'vitest'
import { deleteTask, updateTask, getTasks, createTask } from '../src/taskService.js';

const prisma = new PrismaClient()
let task = null;

test('Create new task in db', async () => {
    const newTask = await createTask(prisma, 'Integration Test');
    expect(newTask).toHaveProperty('taskTitle', 'Integration Test');
    task = newTask;
})

test('Get tasks from DB', async () => {
    const tasks = await getTasks(prisma);
    expect(tasks.length).toBeGreaterThanOrEqual(1);
    expect(tasks.find(item => item.id === task.id)).toBeTruthy();
})

test('Update task', async () => {
    const updatedTask = await updateTask(prisma, task.id, true);
    expect(updatedTask.isComplete).toBe(true);
})

test('Delete task', async () => {
    await deleteTask(prisma, task.id);
    const tasks = await getTasks(prisma);
    expect(tasks.find(item => item.id === task.id)).toBeFalsy();
})