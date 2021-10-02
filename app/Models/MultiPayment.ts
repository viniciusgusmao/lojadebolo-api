import { column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Payment from './Payment'
import BaseModelCustom from './BaseModelCustom'

export default class MultiPayment extends BaseModelCustom {
  @column()
  public installmentCount: number

  @column()
  public delayCapture: boolean

  @column()
  public statementDescriptor: string

  @column()
  public wirecardId: string

  @column()
  public status: string

  @column()
  public amountCurrency: string

  @column()
  public amountTotal: string

  @hasMany(() => Payment)
  public orders: HasMany<typeof Payment>
}
