import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from "express";
import { deleteTask, updateTask, getTasks, createTask } from "./taskService.js";

// Setup variables
const prisma = new PrismaClient()
const app = express()
app.use(cors());
app.use(express.json())

// Task CRUD
app.get('/task', async (req, res) => {
  res.json(await getTasks(prisma));
});

app.post('/task', async (req, res) => {
  const { taskTitle } = req.body;
  res.json(await createTask(prisma, taskTitle));
})

app.put('/task/:id', async (req, res) => {
  const {id} = req.params;
  const {isComplete} = req.body;
  res.json(await updateTask(prisma, id, isComplete));
})

app.delete('/task/:id', async (req, res) => {
  const {id} = req.params;
  res.json(await deleteTask(prisma, id));
})

// Run server
const server = app.listen(3000, () =>
    console.log(`*** Server ready at: http://localhost:3000 ***`),
)
