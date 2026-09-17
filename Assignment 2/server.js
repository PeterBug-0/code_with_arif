import express from 'express';
import taskRouter from './routes/tasks.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middleware: JSON Parser
app.use(express.json());

// 2. Middleware: Custom Logger
app.use((req, res, next) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${req.method}] ${req.url} - ${timestamp}`);
  next();
});

// Serve static files from 'public' folder
app.use(express.static('public'));

// Task API routes
app.use('/tasks', taskRouter);

// 4. Error Handling: 404 Non-existent Routes
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: 'public' });
});

// 4. Error Handling: Global Error Handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is currently running on http://localhost:${PORT}`);
});