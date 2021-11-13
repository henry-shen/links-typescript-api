import {
  Entity, Column, ManyToOne, JoinColumn,
  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm'
import { User } from './user'

@Entity()
export class Link {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  url: string

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
