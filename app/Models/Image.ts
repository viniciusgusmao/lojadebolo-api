import { column } from '@ioc:Adonis/Lucid/Orm'
import BaseModelCustom from './BaseModelCustom'

export default class Image extends BaseModelCustom {
  @column()
  public name: string
}
