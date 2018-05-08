var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.collection.models.forEach(function(video){
    //   new VideoListEntryView({collection: video});  
    // });
    this.render();
    //this.collection.on('sync',this.render, this)
    this.collection.models.forEach(function(video) {
      new VideoListEntryView({model: video});
    });
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    //videoList.render();

    return this;
  },

  template: templateURL('src/templates/videoList.html')
  //template: templateURL('spec/data/fakeVideoData.js')
});
