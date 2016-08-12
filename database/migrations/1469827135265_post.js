'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title');
      table.string('post');
      table.integer('likes');
      table.integer('user_id');
      table.boolean('is_fav');
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostSchema
