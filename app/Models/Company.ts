import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  HasOne,
  hasOne,
  hasMany,
  HasMany,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import CreditcardCompany from './CreditcardCompany'
import Plan from './Plan'
import Product from './Product'
import BaseModelCustom from './BaseModelCustom'

export default class Company extends BaseModelCustom {
  @column()
  public avatar: string

  @column()
  public wirecardId: number

  @column()
  public fullname: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public cpf: string

  @column()
  public cnpj: string

  @column()
  public phone_area_code: number

  @column()
  public phone_number: number

  @column()
  public birthdate_day: number

  @column()
  public birthdate_month: number

  @column()
  public birthdate_year: number

  @column()
  public addressStreet: string

  @column()
  public addressStreetNumber: string

  @column()
  public addressCity: string

  @column()
  public addressDistrict: string

  @column()
  public addressState: string

  @column()
  public addressCountry: string

  @column()
  public addressZipcode: string

  @column()
  public profile: string

  @beforeSave()
  public static async hashPassword(company: Company) {
    if (company.$dirty.password) {
      company.password = await Hash.make(company.password)
    }
  }

  @hasOne(() => CreditcardCompany)
  public creditcards: HasOne<typeof CreditcardCompany>

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @manyToMany(() => Plan, {
    pivotTable: 'subscriptions',
    pivotColumns: ['wirecardId', 'amount', 'payment_method', 'status'],
    pivotTimestamps: true,
  })
  public subscriptions: ManyToMany<typeof Plan>
}
