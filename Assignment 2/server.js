import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import taskRouter from './routes/tasks.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.json());

// 1. Explicitly serve assignment2.html on the root route FIRST
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'assignment2.html'));
});

// 2. Serve static assets (CSS, JS, images)
app.use(express.static(publicPath));

// API Routes
app.use('/tasks', taskRouter);

// 3. Catch-all for 404s
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicPath, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server is currently running on http://localhost:${PORT}`);
});