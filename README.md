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
| frontend build | `VITE_API_URL` | Origin of the deployed API, e.g. `https://api.example.com`. Leave empty in development. |

Never commit a real `.env` file. Both folders have an `.env.example` to copy.

## API

`POST /api/contact` with JSON `{ name, email, message, course? }` saves a
contact submission and returns `201`.
