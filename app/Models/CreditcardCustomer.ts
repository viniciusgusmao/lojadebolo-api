import { column } from '@ioc:Adonis/Lucid/Orm'
import BaseModelCustom from './BaseModelCustom'

export default class CreditcardCustomer extends BaseModelCustom {
  @column()
  public creditCardId: string

  @column()
  public brand: number

  @column()
  public first6: string

  @column()
  public last4: string
}
