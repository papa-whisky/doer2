var TodoView = Backbone.View.extend({
  className: 'todo',

  initialize: function() {
    this.listenTo(todoList, 'add', this.render);
    this.listenTo(todoList, 'remove', this.render);
  },

  render: function() {
    var html = ['<h3>Todo:</h3>'];
    todoList.each(function(note) {
      var noteView = new NoteView({ model: note });
      noteView.render();
      html.push(noteView.el)
    });
    this.$el.html(html);
  }
});
