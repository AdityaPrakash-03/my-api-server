const User = require('../models/User');

describe('User Model Logic', () => {
    it('should create a user object', () => {
    const user = new User({ name: 'Aditya', email: 'a@example.com', age: 22 });
    expect(user.name).toBe('Aditya');
    });
});
