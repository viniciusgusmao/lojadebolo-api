import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Subcategory from './Subcategory'
import BaseModelCustom from './BaseModelCustom'

export default class Category extends BaseModelCustom {
  @column()
  public name: string

  @column()
  public status: boolean

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @hasMany(() => Subcategory)
  public subcategories: HasMany<typeof Subcategory>
}
