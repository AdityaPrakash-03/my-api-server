const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const User = require('../models/User');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('User API', () => {
  it('POST /api/users - should create user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'API Test', email: 'api@test.com', age: 28 });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('API Test');
  });

  it('GET /api/users - should return all users', async () => {
    await User.create({ name: 'User1', email: 'u1@example.com', age: 21 });
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('PUT /api/users/:id - should update user', async () => {
    const user = await User.create({ name: 'Old', email: 'o@o.com', age: 30 });
    const res = await request(app)
      .put(`/api/users/${user._id}`)
      .send({ name: 'New Name' });
    expect(res.body.name).toBe('New Name');
  });

  it('DELETE /api/users/:id - should delete user', async () => {
    const user = await User.create({ name: 'Del', email: 'd@d.com', age: 25 });
    const res = await request(app).delete(`/api/users/${user._id}`);
    expect(res.body.message).toBe('User deleted');
  });
});
