import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Image from './Image'
import BaseModelCustom from './BaseModelCustom'

export default class Flavor extends BaseModelCustom {
  @column()
  public name: string

  @column()
  public detail: string

  @column()
  public size: string

  @column()
  public quantity: number

  @column()
  public price: number

  @column()
  public validity: string

  @column()
  public minimum_order: number

  @column()
  public maximum_flavors_allowed: number

  @hasMany(() => Image)
  public images: HasMany<typeof Image>
}
