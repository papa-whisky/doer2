console.log('linked');

var Note = Backbone.Model.extend({});

var todoList = new Backbone.Collection([new Note({
  content: 'do something',
  done: false
}), new Note({
  content: 'blah blah blah',
  done: false
})]);

var doneList = new Backbone.Collection([new Note({
  content: 'another note',
  done: true
})]);

var todoView = new TodoView();
todoView.render();
$('body').append(todoView.$el);

var doneView = new DoneView();
doneView.render();
$('body').append(doneView.$el);
