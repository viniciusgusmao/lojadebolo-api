import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orderdetails extends BaseSchema {
  protected tableName = 'orderdetails'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('price').notNullable()
      table.integer('quantity').defaultTo(1)
      table.text('detail').notNullable()
      table.integer('orderId').unsigned().references('orders.id')
      table.integer('flavorId').unsigned().references('flavors.id')

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
