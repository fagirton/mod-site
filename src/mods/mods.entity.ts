import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mod {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar', { width: '100' })
  name: string;

  @Column({ type: 'varchar', width: '255' })
  description: string;

  @Column({ type: 'datetime' })
  createdAt: string;
}
