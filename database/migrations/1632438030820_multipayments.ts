import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Multipayments extends BaseSchema {
  protected tableName = 'multipayments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('installmentCount').defaultTo(1)
      table.boolean('delayCapture').defaultTo(false)
      table.string('statementDescriptor').defaultTo('')
      table.string('wirecardId').nullable()
      table
        .enum('status', [
          'CREATED',
          'WAITING',
          'IN_ANALYSIS',
          'PRE_AUTHORIZED',
          'AUTHORIZED',
          'CANCELLED',
          'REFUNDED',
          'REVERSED',
          'SETTLED',
        ])
        .nullable()
      table.string('amountCurrency').nullable()
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
