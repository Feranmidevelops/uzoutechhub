# Uzou Tech Hub

Website for Uzou TechEd Academy and its Young & Techy program: free,
five-week online tech training for teenagers, plus paid courses.

- `frontend/` is a React + Vite site.
- `backend/` is an Express API that saves contact form submissions to MongoDB.

## Running it locally

You need Node.js 20 or newer and a MongoDB connection string (a free
MongoDB Atlas cluster works).

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # then put your own MONGO_URI in .env
npm run dev            # http://localhost:5000
```

### 2. Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev            # http://localhost:5173
```

In development the Vite server forwards every `/api` request to the backend
on port 5000, so the frontend needs no extra settings. If you change the
backend `PORT`, update the proxy target in `frontend/vite.config.js` too.

## Environment variables

| Where | Variable | What it is |
| --- | --- | --- |
| `backend/.env` | `MONGO_URI` | MongoDB connection string |
| `backend/.env` | `PORT` | Port for the API (defaults to 5000) |
| `backend/.env` | `CORS_ORIGIN` | Optional comma-separated list of other sites allowed to call the API |
| frontend build | `VITE_API_URL` | Origin of the deployed API, e.g. `https://api.example.com`. Leave empty in development. |

Never commit a real `.env` file. Both folders have an `.env.example` to copy.

## API

`POST /api/contact` with JSON `{ name, email, message, course? }`.

- `201` when the message is saved.
- `400` with `{ error, fields }` when something needs fixing (name up to 100 characters, a valid email, a message up to 2000 characters).
- `429` after 10 messages from one connection in 15 minutes.
- `413` for bodies over 10kb.

Unknown fields are ignored, and a hidden `website` field acts as a spam trap.

## Tests

```bash
cd backend
npm test
```
