import { User } from "src/user/entities/user.entity";
import { Entity,PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()

export class Task {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    taskDescription: string;

    @Column()
    createDate: number;
    
    @Column()
    status: boolean;

    @ManyToOne(() => User,(user)=> user.tasks)
    user: User

}
