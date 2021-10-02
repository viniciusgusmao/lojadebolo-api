import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subscriptions extends BaseSchema {
  protected tableName = 'subscriptions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('wirecardId').notNullable()
      table.string('amount').nullable()
      table.enum('payment_method', ['CREDIT_CARD', 'BOLETO']).notNullable()
      table
        .enum('status', ['ACTIVE', 'SUSPENDED', 'EXPIRED', 'OVERDUE', 'CANCELED', 'TRIAL'])
        .notNullable()
      table.integer('companyId').unsigned().references('companies.id')
      table.integer('planId').unsigned().references('plans.id')
      table.unique(['companyId', 'planId'])

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
