import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest'
import { deleteTask, updateTask, getTasks, createTask } from '../src/taskService.js';
import { PrismaClient } from "@prisma/client";

// Mock DB calls
vi.mock('@prisma/client', () => {
    const PrismaClient = vi.fn();
    PrismaClient.prototype.task = vi.fn();
    PrismaClient.prototype.task.create = vi.fn();
    PrismaClient.prototype.task.update = vi.fn();
    PrismaClient.prototype.task.delete = vi.fn();
    PrismaClient.prototype.task.findMany = vi.fn();

    return {
        PrismaClient,
        default: () => {}
    }
})

describe('Testing task CRUD with db mocked', () => {
    let prisma;

    beforeEach(() => {
        prisma = new PrismaClient()
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    it('Should call prisma create', async () => {
        await createTask(prisma, 'Integration Test');
        expect(prisma.task.create).toBeCalledTimes(1);
        expect(prisma.task.create).toBeCalledWith({data: {
            taskTitle: 'Integration Test',
        }});
    })

    it('Should call prisma get many', async () => {
        await getTasks(prisma);
        expect(prisma.task.findMany).toBeCalledTimes(1)
    })

    it('Should call prisma update', async () => {
        await updateTask(prisma, 1, true);
        expect(prisma.task.update).toBeCalledTimes(1)
        expect(prisma.task.update).toBeCalledWith({
            where: {id: 1},
            data: {
                isComplete: true
            },
        })
    })

    it('Should call prisma delete', async () => {
        await deleteTask(prisma, 1);
        expect(prisma.task.delete).toBeCalledTimes(1)
        expect(prisma.task.delete).toBeCalledWith({
            where: {
                id: 1,
            },
        })
    })
})
