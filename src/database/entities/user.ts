import {
  Entity, OneToMany,
  PrimaryGeneratedColumn, Column
} from 'typeorm'
import { Link } from './link'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToMany(() => Link, link => link.user, { eager: true })
  links: Link[]

  @Column()
  username: string

  @Column()
  password: string
}
