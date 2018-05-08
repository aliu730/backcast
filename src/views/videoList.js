var VideoListView = Backbone.View.extend({
  el: ".list",
  initialize: function() {
    // this.collection.models.forEach(function(video){
    //   new VideoListEntryView({collection: video});  
    // });
    
    //this.collection.on('sync',this.render, this)
    //console.log(this.collection.models)
    //console.log(this.collecion)
    this.collection.models.forEach(function(video) {
      var videolist = new VideoListEntryView({model: video});
    });
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.find('.video-list').children().detach();
    // this.$el.children().detach();

    //console.log(this.collection.models);


    for (var i = 0; i < this.collection.models.length; i++) {
      var newModel = new VideoListEntryView({model : this.collection.models[i]});
      this.$el.find('.video-list').append(newModel.render());
      //$('.video-list-entry-title').html(this.model.attributes.snippet.title)
    }

    return this;
  },

  template: templateURL('src/templates/videoList.html')
  //template: templateURL('spec/data/fakeVideoData.js')
});
