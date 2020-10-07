const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: { type: 'string', require: 'true' },
    status: { type: 'string', require: 'true' }
});

let Task = mongoose.model('Task', taskSchema);

module.exports = Task;