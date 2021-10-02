import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreditcardCustomers extends BaseSchema {
  protected tableName = 'creditcardcustomers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('creditCardId').notNullable()
      table.string('brand').notNullable()
      table.string('first6').notNullable()
      table.string('last4').notNullable()
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
