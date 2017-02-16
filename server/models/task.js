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

module.exports = {
  getTasks
}
