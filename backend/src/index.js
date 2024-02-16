const { PrismaClient } = require('@prisma/client')
const cors = require('cors');
const express = require("express");

const prisma = new PrismaClient()
const app = express()
app.use(cors());
app.use(express.json())

// Task CRUD
app.get('/task', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
  console.log('Get Tasks');
});

app.post('/task', async (req, res) => {
  const { taskTitle } = req.body;
  const task = await prisma.task.create({
    data: {
      taskTitle: taskTitle,
    },
  })
  res.json(task)
  console.log(`Create Task: ${taskTitle}`);
})

app.put('/task/:id', async (req, res) => {
  const {id} = req.params;
  const {isComplete} = req.body;
  try {
    const task = await prisma.task.update({
      where: {id: Number(id)},
      data: {
        isComplete: isComplete
      },
    })
    res.json(task)
    console.log(`Update Task: ${id}`);
  } catch (error) {
    res.json({error: `Task with ID ${id} does not exist in the database`})
  }
})

app.delete('/task/:id', async (req, res) => {
  const {id} = req.params
  await prisma.task.delete({
    where: {
      id: Number(id),
    },
  })
  console.log(`Deleted Task: ${id}`)
})

const server = app.listen(3000, () =>
    console.log(`*** Server ready at: http://localhost:3000 ***`),
)
