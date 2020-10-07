const Task = require('../models/task');

module.exports = {s
  getIndex: function (req, res) {
    Task
      .find()
      .lean()
      .then(task => {
        res.render('index', {
          'openTasks': task.filter(e => e.status === 'Open'),
          'inProgressTasks': task.filter(e => e.status === 'In Progress'),
          'finishedTasks': task.filter(e => e.status === 'Finished')
        });
      });
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Task.create(req.body)
      .then(() => res.redirect('/'))
      .catch(() => res.redirect('create'));
  },
  getEdit: function (req, res) {
    let id = req.params.id;
    Task.findById(id).lean().then(task => {
      res.render('edit', { task });
    })
  },
  postEdit: function (req, res) {
    let id = req.params.id;
    let newTitle = req.body;
    Task.findByIdAndUpdate(id, newTitle).then(() => {
      res.redirect('/');
    });
  },
  getDelete: function (req, res) {
    let id = req.params.id;
    Task.findById(id).lean().then((task) => {
      res.render('delete', { task });
    });
  },
  postDelete: function (req, res) {
    let id = req.params.id;
    Task.findByIdAndRemove(id).then(() => {
      res.redirect('/');
    });
  }
};