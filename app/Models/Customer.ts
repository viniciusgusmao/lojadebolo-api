import Hash from '@ioc:Adonis/Core/Hash'
import { DateTime } from 'luxon'
import { column, beforeSave, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import CreditcardCustomer from './CreditcardCustomer'
import MultiOrder from './MultiOrder'
import BaseModelCustom from './BaseModelCustom'

export default class Customer extends BaseModelCustom {
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

  @column.date()
  public birthDate: DateTime

  @column()
  public taxDocumentNumber: string

  @column()
  public phoneAreaCode: number

  @column()
  public phoneNumber: number

  @column()
  public shippingAddressStreet: string

  @column()
  public shippingAddressStreetNumber: string

  @column()
  public shippingAddressComplement: string

  @column()
  public shippingAddressDistrict: string

  @column()
  public shippingAddressCity: string

  @column()
  public shippingAddressState: string

  @column()
  public shippingAddressZipcode: string

  @beforeSave()
  public static async hashPassword(customer: Customer) {
    if (customer.$dirty.password) {
      customer.password = await Hash.make(customer.password)
    }
  }

  @hasMany(() => CreditcardCustomer)
  public creditcards: HasMany<typeof CreditcardCustomer>

  @hasMany(() => MultiOrder)
  public multiorders: HasMany<typeof MultiOrder>
}
