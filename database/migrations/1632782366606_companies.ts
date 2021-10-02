import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companies extends BaseSchema {
  protected tableName = 'companies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('avatar').nullable()
      table.string('wirecardId').notNullable()
      table.string('fullname').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').nullable()
      table.string('cpf').nullable()
      table.string('cnpj').nullable()
      table.integer('phone_area_code').notNullable()
      table.integer('phone_number').notNullable()
      table.integer('birthdate_day').notNullable()
      table.integer('birthdate_month').notNullable()
      table.integer('birthdate_year').notNullable()
      table.string('addressStreet').notNullable()
      table.string('addressStreetNumber').notNullable()
      table.string('addressCity').notNullable()
      table.string('addressDistrict').notNullable()
      table.string('addressState').notNullable()
      table.string('addressCountry').notNullable()
      table.integer('addressZipcode').notNullable()
      table.enum('profile', ['COMERCIAL', 'FINANCEIRO', 'OPERADOR', 'SUPER']).defaultTo('OPERADOR')

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
