const express = require('express');
const router = express.Router();

const { getTasks, addTask, deleteTask } = require('../models/task');

router.get('/tasks', getTasks, (req, res) => {
  res.json(res.tasks || []);
});

router.delete('/tasks/:id', deleteTask, (req, res) => {
  res.json({ message: 'Task Deleted' });
});

router.post('/tasks', addTask, (req, res) => {
  res.json(res.rows);
});

module.exports = router;

