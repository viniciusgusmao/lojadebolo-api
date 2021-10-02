import { column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import BaseModelCustom from './BaseModelCustom'
import MultiPayment from './MultiPayment'

export default class PaymentType extends BaseModelCustom {
  @column()
  public method: string

  @column()
  public displayName: string

  @hasMany(() => MultiPayment)
  public multiPayments: HasMany<typeof MultiPayment>
}
