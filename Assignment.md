# Assignment: Express.js Task Tracker API

## Objective
Build a RESTful API using Node.js and Express.js that manages a list of tasks stored in memory.

---

## 1. Task Data Structure
Each task item should look like this:

```json
{
  "id": 1,
  "title": "Learn Express routing",
  "completed": false,
  "createdAt": "2026-09-16T10:00:00.000Z"
}
```

---

## 2. Required Endpoints

| Method | Endpoint | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Health check endpoint returning `{ "status": "API is running" }` | `200 OK` |
| `GET` | `/tasks` | Get all tasks. Allow filtering using query param `?completed=true` | `200 OK` |
| `GET` | `/tasks/:id` | Get a specific task by its ID | `200 OK` or `404` |
| `POST` | `/tasks` | Create a new task (body requires `{ "title": "string" }`) | `201 Created` |
| `PATCH` | `/tasks/:id` | Update a task's `title` or `completed` status | `200 OK` or `404` |
| `DELETE`| `/tasks/:id` | Delete a task by its ID | `204 No Content` or `404` |

---

## 3. Middleware Requirements

1. **JSON Parser:** Use `express.json()` to parse request bodies.
2. **Logger:** Create custom middleware that logs the method, path, and timestamp for every request (e.g., `[GET] /tasks - 10:30 AM`).
3. **Validator:** Create middleware for `POST /tasks` that checks if `title` is present and non-empty. Reject invalid requests with `400 Bad Request`.

---

## 4. Error Handling

- **404 Handling:** Return a JSON error message for non-existent routes (e.g., `{ "error": "Route not found" }`).
- **404 for Missing Resources:** Return a JSON error message when requesting an ID that doesn't exist.
- **Global Error Handler:** Use Express's standard error middleware signature `(err, req, res, next)` to handle uncaught server errors gracefully.

---

## 5. Submission & Deliverables

1. **GitHub Repo:** Push your code to a GitHub repository.
2. **Pull Request:** Create a Pull Request from a feature branch to `main`.
3. **Testing:** Include a `requests.http` file or exported Postman collection demonstrating all endpoints working.