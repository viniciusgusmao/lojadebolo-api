import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Flavors extends BaseSchema {
  protected tableName = 'flavors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.text('detail').nullable()
      table.string('size').nullable()
      table.integer('quantity').nullable()
      table.integer('price').nullable()
      table.string('validity').nullable()
      table.integer('minimum_order').nullable()
      table.integer('maximum_flavors_allowed').nullable()
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
