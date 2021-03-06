import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        photo: this.get('photo'),
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        genre: this.get('genre'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
