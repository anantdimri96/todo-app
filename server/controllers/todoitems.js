const TodoItem=require('../models').TodoItem;

module.exports = {
  create(req,res){
    return TodoItem
      .create({
            content:req.body.content,
            todoId: req.params.todoId
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(todoItem => res.status(400).send(todoItem))
  },
  list(req,res) {
    return TodoItem
      .all()
      .then(todoItems => res.status(200).send(todoItems))
      .catch(error => res.status(400).send(error));
  },
}
