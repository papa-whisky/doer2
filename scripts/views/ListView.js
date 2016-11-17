var ListView = Backbone.View.extend({
  className: 'done',
  
  initialize: function() {
    this.listenTo(this.collection, 'change', this.render);
    // this.listenTo(this.collection, 'remove', this.render);
  },

  render: function() {
    this.collection.each(function(model) {
      var view = new NoteView({ model: model});
      this.$el.append(view.render().el);
    }, this);
    return this;
  }
});
