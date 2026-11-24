// Checks and cleans a contact form submission. Only the known fields are
// kept, so clients can't set anything else on the saved document.

const LIMITS = { name: 100, email: 200, message: 2000, course: 120 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

const validateContact = (body = {}) => {
  const data = {
    name: clean(body.name),
    email: clean(body.email).toLowerCase(),
    message: clean(body.message),
    course: clean(body.course),
  };
  const errors = {};

  if (!data.name) errors.name = 'Please tell us your name.';
  else if (data.name.length > LIMITS.name) errors.name = `Keep your name to ${LIMITS.name} characters or fewer.`;

  if (!data.email) errors.email = 'Please add your email address.';
  else if (data.email.length > LIMITS.email || !EMAIL.test(data.email)) errors.email = 'Please check your email address.';

  if (!data.message) errors.message = 'Please write a short message.';
  else if (data.message.length > LIMITS.message) errors.message = `Keep your message to ${LIMITS.message} characters or fewer.`;

  if (data.course.length > LIMITS.course) errors.course = 'That course name is too long.';
  if (!data.course) delete data.course;

  return { data, errors, valid: Object.keys(errors).length === 0 };
};

// A hidden "contact_check" field that people never see (named so password
// managers won't autofill it). Bots that fill in every field fill it too.
const isLikelySpam = (body = {}) => body.contact_check != null && String(body.contact_check).trim() !== '';

module.exports = { validateContact, isLikelySpam, LIMITS };
