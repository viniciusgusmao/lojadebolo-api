import { column } from '@ioc:Adonis/Lucid/Orm'
import BaseModelCustom from './BaseModelCustom'

export default class CreditcardCompany extends BaseModelCustom {
  @column()
  public holder_name: string

  @column()
  public number: string

  @column()
  public expiration_month: string

  @column()
  public expiration_year: string
}
