'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestsSchema extends Schema {
  up () {
    this.create('tests', (table) => {
      table.increments()
      table.string('eggkey')
      table.string('eggvalue')
      table.timestamps()
    })
  }

  down () {
    this.drop('tests')
  }
}

module.exports = TestsSchema
