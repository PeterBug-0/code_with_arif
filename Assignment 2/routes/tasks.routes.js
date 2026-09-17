import { Router } from 'express';

const router = Router();

// In-memory data store
let tasks = [
  {
    id: 1,
    title: "Learn Express routing",
    completed: false,
    createdAt:  new Date ().toISOString()
  }
];
let nextId = 2;

// Middleware: Validator for POST /tasks
const validateTaskTitle = (req, res, next) => {
const {title} = req.body;
if (!title || typeof title !== 'string' || title.trim() === ''){
return res.status(400).json({ error: "Title is required and must be a non-empty string"});
}
nextId();
};




// GET /tasks - Get all tasks (supports ?completed=true/false)
router.get('/', (req, res) => {
const {completed} = req.query;
if (completed !== undefined){
const isCompleted = completed === 'true';
const filteredTasks = tasks.filter(tasks => task.completed === isCompleted);
return res.status(200).json({filteredTasks});
}

res.status(200).json({Tasks});
})


// GET /tasks/:id - Get a task by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});

// POST /tasks - Create a new task
router.post('/', validateTaskTitle, (req, res) => {
  const newTask = {
    id: nextId++,
    title: req.body.title.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PATCH /tasks/:id - Update task title or completed status
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: "Title must be a non-empty string" });
    }
    task.title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({ error: "Completed status must be a boolean" });
    }
    task.completed = completed;
  }

  res.status(200).json(task);
});

// DELETE /tasks/:id - Delete a task by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

export default router;