import { getRepository, Repository } from 'typeorm';
import ICreateTransactionDTO from '../../../dtos/ICreateTransactionDTO';
import ITransactionsRepository from '../../../repositories/ITransactionsRepository';
import Transaction from '../entities/Transaction';

class TransactionsRepository implements ITransactionsRepository {
    private ormRepository: Repository<Transaction>;

    constructor() {
        this.ormRepository = getRepository(Transaction);
    }
    
    async create(data: ICreateTransactionDTO): Promise<Transaction> {
        const transaction = this.ormRepository.create(data);

        await this.ormRepository.save(transaction);

        return transaction;
    }

    async list(user_id: string): Promise<Transaction[] | undefined> {
        const transactions = await this.ormRepository.find({
            where: {
                user_id
            }
        });

        return transactions;
    }
}

export default TransactionsRepository;