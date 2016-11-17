var NoteView = Backbone.View.extend({
  className: 'note',

  events: {
    'click p': 'toggleStatus'
  },

  render: function() {
    this.$el.html('<p>' + this.model.get('content') + '</p>');
    return this;
  },

  toggleStatus: function() {
    if (this.model.get('done')) {
      this.model.set('done', false);
      doneList.remove(this.model);
      todoList.add(this.model);
    } else {
      this.model.set('done', true);
      todoList.remove(this.model);
      doneList.add(this.model);
    }
  }
});
