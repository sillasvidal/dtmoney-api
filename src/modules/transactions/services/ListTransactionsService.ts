import { inject, injectable } from "tsyringe";
import Transaction from "../infra/typeorm/entities/Transaction";
import ITransactionsRepository from "../repositories/ITransactionsRepository";

@injectable()
class ListTransactionsService {
    constructor (
        @inject('TransactionsRepository')
        private transactionsRepository: ITransactionsRepository
    ) {}

    public async execute(user_id : string): Promise<Transaction[] | undefined> {
        const transactions = await this.transactionsRepository.list(
            user_id
        );

        return transactions;
    }
}

export default ListTransactionsService;