var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    // this.render();
  //this.model.on('select', this.render)
    //this.template.on('click', this.render, this)
    //console.log(this);
    //console.log(this.collections)
  },
  handleClick: function(){
    this.model.select();
  },

  render: function() {
    var src = this.model.attributes.snippet.thumbnails.default.url;
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes.snippet);
    this.$el.find('.video-list-entry-title').html(this.model.attributes.snippet.title);
    this.$el.find('.video-list-entry-detail').html(this.model.attributes.snippet.description);
    this.$el.find('.media-object').attr('src', src);
    //console.log(this.model.attributes.snippet.title)
    return this.$el;
    
  },
  events: { 
    'click .video-list-entry-title': 'handleClick',
  },
  template: templateURL('src/templates/videoListEntry.html')

});
