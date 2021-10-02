import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Creditcardcompanies extends BaseSchema {
  protected tableName = 'creditcardcompanies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('holder_name').notNullable()
      table.string('number').notNullable()
      table.string('expiration_month').notNullable()
      table.string('expiration_year').notNullable()
      table.integer('companyId').unsigned().references('companies.id').onDelete('CASCADE') // delete post when user is deleted

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
