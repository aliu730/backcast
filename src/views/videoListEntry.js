var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    //this.models.render();
    //this.template.on('click', this.render, this)
    //console.log(this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.collections.models);
    this.collections.models.forEach(function(element) {
      console.log(element);
    });
    return this;
    //this.videos.models.render();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
