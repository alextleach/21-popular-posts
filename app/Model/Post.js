'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {
  user () {
      return this.belongsTo('App/Model/Users');
    }

    posts() {
      return this.hasMany('App/Model/Show');
    }

}

module.exports = Post
