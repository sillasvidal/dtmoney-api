import { inject, injectable } from "tsyringe";
import Transaction from "../infra/typeorm/entities/Transaction";
import ITransactionsRepository from "../repositories/ITransactionsRepository";

interface IRequest {
    title: string;
    amount: number;
    category: string;
    type: 'deposit' | 'withdraw';
    user_id: string;
}

@injectable()
class CreateTransactionService {
    constructor (
        @inject('TransactionsRepository')
        private transactionsRepository: ITransactionsRepository
    ) {}

    public async execute({ title, amount, category, type, user_id }: IRequest): Promise<Transaction> {
        const transaction = await this.transactionsRepository.create({
            title,
            amount,
            category,
            type,
            user_id
        });

        return transaction;
    }
}

export default CreateTransactionService;