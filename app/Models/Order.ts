import { column, hasOne, HasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Payment from './Payment'
import Flavor from './Flavor'
import BaseModelCustom from './BaseModelCustom'

export default class Order extends BaseModelCustom {
  @column()
  public wirecardId: string

  @column()
  public status: string

  @column()
  public amountTotal: number

  @hasOne(() => Payment)
  public payment: HasOne<typeof Payment>

  @manyToMany(() => Flavor, {
    pivotTable: 'orderdetails',
    pivotColumns: ['price', 'quantity', 'detail'],
    pivotTimestamps: true,
  })
  public orderDetails: ManyToMany<typeof Flavor>
}
