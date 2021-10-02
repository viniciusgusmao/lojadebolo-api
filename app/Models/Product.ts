import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Flavor from './Flavor'
import BaseModelCustom from './BaseModelCustom'

export default class Product extends BaseModelCustom {
  @column()
  public name: string

  @column()
  public detail: string

  @column()
  public status: boolean

  @hasMany(() => Flavor)
  public flavors: HasMany<typeof Flavor>
}
