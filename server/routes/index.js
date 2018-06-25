const todosController = require('../controllers').todos;
const todoitemsController = require('../controllers').todoItems;

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);

  app.post('/api/todoItems', todoitemsController.create);
  app.get('/api/todoItems', todoitemsController.list);



};
