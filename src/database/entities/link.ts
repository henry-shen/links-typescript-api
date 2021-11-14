import {
  Entity, Column, ManyToOne, JoinColumn,
  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm'
import { User } from './user'
import { LinkType, MusicLink, Show } from '../../types'

@Entity()
export class Link {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  type: LinkType

  @Column('jsonb')
  data: string | Show[] | MusicLink[]

  @Column()
  userId: string

  @ManyToOne(() => User, user => user.links)
  @JoinColumn({ name: 'userId' })
  user: User

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
