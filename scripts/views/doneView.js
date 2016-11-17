var DoneView = Backbone.View.extend({
  className: 'done',

  initialize: function() {
    this.listenTo(doneList, 'add', this.render);
    this.listenTo(doneList, 'remove', this.render);
  },

  render: function() {
    var html = ['<h3>Done:</h3>'];
    doneList.each(function(note) {
      if (note.get('done')) {
        var noteView = new NoteView({ model: note });
        noteView.render();
        html.push(noteView.el)
      }
    });
    this.$el.html(html);
  }
});
