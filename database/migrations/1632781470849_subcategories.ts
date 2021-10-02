import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subcategories extends BaseSchema {
  protected tableName = 'subcategories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.boolean('status').defaultTo(true)
      table.integer('categoryId').unsigned().references('categories.id').onDelete('CASCADE') // delete post when user is deleted
      /**

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
