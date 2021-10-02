import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Plans extends BaseSchema {
  protected tableName = 'plans'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('wirecardId').notNullable()
      table.string('name').notNullable()
      table.string('description').nullable()
      table.integer('amount').notNullable()
      table.integer('setup_fee').nullable()
      table.integer('max_qty').nullable()
      table.integer('intervalLength').defaultTo(1)
      table.enum('intervalUnit', ['DAY', 'MONTH', 'YEAR'])
      table.integer('billing_cycles').nullable()
      table.integer('trialDays').nullable()
      table.boolean('trialEnable').defaultTo(false)
      table.boolean('trialholdSetupFee').defaultTo(false)
      table.enum('status', ['ACTIVE', 'INACTIVE']).defaultTo('ACTIVE')
      table.enum('payment_method', ['BOLETO', 'CREDIT_CARD', 'ALL']).defaultTo('CREDIT_CARD')

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
