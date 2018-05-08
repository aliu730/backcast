var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
  //this.model.on('select', this.render)
    //this.template.on('click', this.render, this)
    //console.log(this);
  },
  handleClick: function(){
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
    
  },
  events: { 
    'click .video-list-entry-title': 'handleClick',
  },
  template: templateURL('src/templates/videoListEntry.html')

});
