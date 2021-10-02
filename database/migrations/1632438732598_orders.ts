import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('wirecardId').nullable()
      table.enum('status', ['CREATED', 'PAID', 'NOT_PAID', 'WAITING', 'REVERTED']).nullable()
      table.integer('amountTotal').nullable()
      table.integer('multiorderId').unsigned().references('multiorders.id').onDelete('CASCADE') // delete post when user is deleted
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
