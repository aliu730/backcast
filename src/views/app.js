var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView();
    //console.log(this.videos)
  },


  render: function() {
    this.$el.html(this.template());
    //console.log(this.videos);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
