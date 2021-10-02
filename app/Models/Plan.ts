import { column } from '@ioc:Adonis/Lucid/Orm'
import BaseModelCustom from './BaseModelCustom'

export default class Plan extends BaseModelCustom {
  @column()
  public wirecardId: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public amount: number

  @column()
  public setup_fee: number

  @column()
  public max_qty: number

  @column()
  public intervalLength: number

  @column()
  public intervalUnit: string

  @column()
  public billing_cycles: number

  @column()
  public trialDays: number

  @column()
  public trialEnable: boolean

  @column()
  public trialholdSetupFee: boolean

  @column()
  public status: string

  @column()
  public payment_method: string
}
