'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('job').notNullable()
      table.string('email')
      table.string('contact', 14)
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
