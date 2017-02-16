const express = require('express');
const router = express.Router();

const { getTasks, addTask } = require('../models/task');

router.get('/tasks', getTasks, (req, res) => {
  res.json(res.tasks || []);
});

module.exports = router;

