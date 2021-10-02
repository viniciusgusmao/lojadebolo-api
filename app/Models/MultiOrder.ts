import { column, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import MultiPayment from './MultiPayment'
import BaseModelCustom from './BaseModelCustom'

export default class MultiOrder extends BaseModelCustom {
  @column()
  public wirecardId: string

  @column()
  public status: string

  @hasMany(() => Order)
  public orders: HasMany<typeof Order>

  @hasOne(() => MultiPayment)
  public multiPayment: HasOne<typeof MultiPayment>
}
