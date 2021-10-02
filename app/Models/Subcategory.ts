import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import BaseModelCustom from './BaseModelCustom'

export default class Subcategory extends BaseModelCustom {
  @column()
  public name: string

  @column()
  public status: boolean

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
}
