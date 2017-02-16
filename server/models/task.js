const db = require('../lib/dbConnect.js');

function getTasks(req, res, next) {
  console.log('models/getTasks');
  db.any(`SELECT * FROM tasks`)
  .then((data) => {
    console.log(data);
    res.tasks = data;
    next();
  })
  .catch(err => next(err));
}

function deleteTask(req, res, next) {
  console.log('models/deleteTask');
  db.none(`DELETE FROM tasks WHERE id = $1;`, [req.params.id])
  .then(next())
  .catch(err => next(err));
}

module.exports = {
  getTasks, deleteTask
}
