import ICreateTransactionDTO from "../dtos/ICreateTransactionDTO";
import Transaction from "../infra/typeorm/entities/Transaction";

export default interface ITransactionsRepository {
    create(data: ICreateTransactionDTO): Promise<Transaction>;
    list(user_id: string): Promise<Transaction[] | undefined>;
}