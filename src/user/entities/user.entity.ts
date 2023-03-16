import { Task } from "src/task/entities/task.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    birthday: number;

    @Column()
    profilePictureUrl: string;

    // Definiçao de relacionamento 1 para muitos 
    @OneToMany(() => Task, (task) => task.user)
    tasks:Task[];

}
