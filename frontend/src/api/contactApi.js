import axios from 'axios';

// Where the backend lives. Leave VITE_API_URL unset in development: Vite
// forwards /api requests to the local backend (see vite.config.js).
// For a production build, set it to the deployed API's origin.
const API_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/+$/, '');

export const submitContact = (form) => axios.post(`${API_URL}/api/contact`, form);
