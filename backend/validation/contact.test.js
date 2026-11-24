const test = require('node:test');
const assert = require('node:assert/strict');
const { validateContact, isLikelySpam } = require('./contact');

const good = { name: '  Ada  ', email: ' ADA@Example.com ', message: ' Hello ', course: 'UI/UX Design' };

test('accepts a normal submission and trims it', () => {
  const { valid, data } = validateContact(good);
  assert.equal(valid, true);
  assert.deepEqual(data, { name: 'Ada', email: 'ada@example.com', message: 'Hello', course: 'UI/UX Design' });
});

test('drops fields that are not part of the form', () => {
  const { data } = validateContact({ ...good, createdAt: '2000-01-01', isAdmin: true });
  assert.equal('createdAt' in data, false);
  assert.equal('isAdmin' in data, false);
});

test('course is optional', () => {
  const { valid, data } = validateContact({ ...good, course: '' });
  assert.equal(valid, true);
  assert.equal('course' in data, false);
});

test('rejects missing required fields', () => {
  const { valid, errors } = validateContact({});
  assert.equal(valid, false);
  assert.deepEqual(Object.keys(errors).sort(), ['email', 'message', 'name']);
});

test('rejects a bad email address', () => {
  assert.equal(validateContact({ ...good, email: 'not-an-email' }).errors.email !== undefined, true);
});

test('rejects values that are too long', () => {
  const { errors } = validateContact({ ...good, name: 'a'.repeat(101), message: 'b'.repeat(2001), course: 'c'.repeat(121) });
  assert.ok(errors.name);
  assert.ok(errors.message);
  assert.ok(errors.course);
});

test('ignores non-string values such as Mongo operators', () => {
  const { valid, errors } = validateContact({ name: { $gt: '' }, email: ['a@b.co'], message: 42 });
  assert.equal(valid, false);
  assert.ok(errors.name && errors.email && errors.message);
});

test('flags the hidden honeypot field', () => {
  assert.equal(isLikelySpam({ website: 'http://spam.example' }), true);
  assert.equal(isLikelySpam({ website: '' }), false);
  assert.equal(isLikelySpam({}), false);
});
