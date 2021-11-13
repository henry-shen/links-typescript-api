import { ILink } from '../types/index'
import { Link } from '../database/entities/link'

const presenter = (link: Link): ILink => {
  return {
    name: link.name,
    link: link.url
  }
}

export {
  presenter
}
