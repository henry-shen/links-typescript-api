import { Link } from '../database/entities/link'

const mockClassicLink = {
  id: '1576c97b-3826-4370-a3c5-c85ab5f753cb',
  name: 'Classic Link',
  type: 'classic',
  data: 'https://www.example.com'
}

const mockShowsList = {
  name: 'Shows List Link',
  type: 'shows-list',
  data: [
    {
      date: '2021-12-05',
      venue: 'venue',
      available: 'yes',
      url: 'https://www.bookashow.com'
    },
    {
      date: '2022-10-05',
      venue: 'venue',
      available: 'no'
    }
  ]
}

const mockMusicPlayerLink = {
  name: 'Music Player Link',
  type: 'music-player',
  data: [
    {
      url: 'https://youtube.com',
      platform: 'youtube'
    },
    {
      url: 'https://spotify.com',
      platform: 'spotify'
    }
  ]
}

const mockLinks = [mockClassicLink,
  mockShowsList, mockMusicPlayerLink] as Link[]

const mockUser = {
  id: '753a2338-0f9c-447e-b8ae-89313fc42de4',
  username: 'admin',
  password: 'admin',
  links: mockLinks
}

export const mockCreateLink = (type: string) => {
  if (type === 'classic') return mockClassicLink as Link
  else if (type === 'shows-list') return mockShowsList as Link
  else return mockMusicPlayerLink as Link
}

export const mockFindLinks = (userId: string) => {
  if (userId === mockUser.id) return mockLinks
  else return []
}

export const mockFindCredentials = (credentials: any) => {
  if (credentials.username === mockUser.username && credentials.password === mockUser.password) return mockUser
  else return undefined
}

export const mockFindUser = (username: string) => {
  if (username === mockUser.username) return mockUser
}
