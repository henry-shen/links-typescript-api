declare global {
  export namespace Express {
    export interface Request {
      user: {
        id: string
      }
    }
  }
}

export { Response } from 'express'

export interface ILink {
  name: string
  type: LinkType
  link?: string
  shows?: Show[]
  musicLinks?: MusicLink[]
}

export type LinkType = 'classic' | 'shows-list' | 'music-player'

export interface Show {
  date: string
  venue: string
  available: string
}

export interface MusicLink {
  platform: string
  url: string
}

export interface ILinks {
  username: string
  links: ILink[]
}
