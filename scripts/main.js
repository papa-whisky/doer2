console.log('linked');

var todoList = new Notes([{
  content: 'do something',
  done: false
}, {
  content: 'blah blah blah',
  done: false
}]);

var doneList = new Notes([{
  content: 'another note',
  done: true
}]);

var todoView = new ListView({ collection: todoList });
todoView.render();
$('#root').append(todoView.$el);

var doneView = new ListView({ collection: doneList });
doneView.render();
$('#root').append(doneView.$el);
