import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
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
      table.integer('amountTotal').nullable()
      table.integer('installmentCount').nullable()
      table.text('fundingInstrument').nullable() // save json.stringify
      table.text('events').nullable() // save json stringify
      table.integer('multipaymentId').unsigned().references('multipayments.id').onDelete('CASCADE') // delete post when user is deleted
      table.integer('orderId').unsigned().references('orders.id').onDelete('CASCADE') // delete post when user is deleted

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
