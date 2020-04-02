'use strict'

const Schema = use('Schema')

class TractorsSchema extends Schema {
  up () {
    this.create('tractors', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('brand').notNullable()
      table.integer('year').notNullable()
      table.string('name').notNullable()
      table.integer('total_of_hours')
      table.timestamps()
    })
  }

  down () {
    this.drop('tractors')
  }
}

module.exports = TractorsSchema
