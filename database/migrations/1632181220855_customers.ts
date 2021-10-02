import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Customers extends BaseSchema {
  protected tableName = 'customers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('avatar').nullable()
      table.string('wirecardId').nullable()
      table.string('fullname').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').nullable()
      table.date('birthDate').notNullable()
      table.string('taxDocumentNumber').notNullable()
      table.integer('phoneAreaCode').notNullable()
      table.integer('phoneNumber').notNullable()
      table.string('shippingAddressStreet').notNullable()
      table.string('shippingAddressStreetNumber').notNullable()
      table.string('shippingAddressComplement').nullable()
      table.string('shippingAddressDistrict').notNullable()
      table.string('shippingAddressCity').notNullable()
      table.string('shippingAddressState').notNullable()
      table.string('shippingAddressZipcode').notNullable()
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
