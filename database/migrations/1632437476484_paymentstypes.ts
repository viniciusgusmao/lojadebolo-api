import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Paymentstypes extends BaseSchema {
  protected tableName = 'paymentstypes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.enum('method', ['CREDIT_CARD', 'BOLETO', 'ONLINE_BANK_DEBIT', 'WALLET']).notNullable()
      table.string('displayName').notNullable()
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
