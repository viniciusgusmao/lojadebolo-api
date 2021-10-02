import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Multiorders extends BaseSchema {
  protected tableName = 'multiorders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('wirecardId').nullable()
      table.enum('status', ['CREATED', 'PAID', 'NOT_PAID']).nullable()
      table.integer('customerId').unsigned().references('customers.id').onDelete('CASCADE') // delete post when user is deleted

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.datetime('created_at')
      table.datetime('updated_at')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
