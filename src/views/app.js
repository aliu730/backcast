var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView({collection: this.videos});
    this.render();
    //console.log(this.videos)
    
  },


  render: function() {
    this.$el.html(this.template());
    //console.log(this.videos);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
