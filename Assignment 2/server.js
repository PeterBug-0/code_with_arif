import express from 'express';
import taskRouter from '/routes/tasks.routes.js';

const app = express();
const PORT =  process.env.PORT || 3000;

// 1. Middleware: JSON Parser
app.use = (express.json());

// 2. Middleware: Custom Logger
app.use((req, res, next) => {
    const timsetamp = newDate().localeTimeString();
    console.log('[${req.method}] ${req.url} - ${timestamp} ');
    next();
});

// Serve static files from 'public' folder
app.use(express.static('public'));

// Health check endpoint
app.get('/', (req, res) => {
res.status(200).json({ status: "API is running" });
});

// Task API routes
app.use('/tasks', taskRouter);

// 4. Error Handling: 404 Non-existent Routes
app.use((req, res, next) => {
res.status(404).json({ error: "Route not found" });
});
// 4. Error Handling: Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen( PORT, () => {
    console.log('Server is currently running on http://localhost:${PORT}');
});