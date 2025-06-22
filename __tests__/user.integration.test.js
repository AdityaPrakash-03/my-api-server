const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const User = require('../models/User');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('User Model Integration', () => {
    it('should save and retrieve a user from DB', async () => {
    const user = await User.create({ name: 'Test', email: 't@test.com', age: 30 });
    const found = await User.findById(user._id);
    expect(found.name).toBe('Test');
    });
});
