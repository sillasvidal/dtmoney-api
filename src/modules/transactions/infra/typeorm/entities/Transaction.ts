import User from "@modules/users/infra/typeorm/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('transactions')
class Transaction {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    amount: number;

    @Column()
    category: string;

    @Column()
    type: 'deposit' | 'withdraw';

    @Column()
    user_id: string;

    @ManyToOne(() => User, user => user.transactions)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Transaction;