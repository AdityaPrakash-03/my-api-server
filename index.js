const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/myapidb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.error(err));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const User = require('./models/User');

// Create
app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// Read
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// Update
app.put('/api/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

// Delete
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
});
