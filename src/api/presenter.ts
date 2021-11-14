import {ILink, ILinks, MusicLink, Show} from '../types/index'
import { Link } from '../database/entities/link'
import { User } from '../database/entities/user'

const userPresenter = (user: User): ILinks => {
  return {
    username: user.username,
    links: user.links.map((link) => presenter(link))
  }
}

const presenter = (link: Link): ILink => {
  switch (link.type) {
    case 'classic': return {
      name: link.name,
      type: link.type,
      link: link.data as string
    }
    case 'shows-list': return {
      name: link.name,
      type: link.type,
      shows: link.data as Show[]
    }
    case 'music-player': return {
      name: link.name,
      type: link.type,
      musicLinks: link.data as MusicLink[]
    }
  }
}

export {
  userPresenter, presenter
}
