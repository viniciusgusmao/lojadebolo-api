import { column } from '@ioc:Adonis/Lucid/Orm'
import BaseModelCustom from './BaseModelCustom'

export default class Payment extends BaseModelCustom {
  @column({ isPrimary: true })
  public id: number

  @column()
  public wirecardId: string

  @column()
  public status: string

  @column()
  public amountTotal: number

  @column()
  public installmentCount: number

  @column()
  public fundingInstrument: string

  @column()
  public events: string
}
