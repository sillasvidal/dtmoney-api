import CreateTransactionService from "@modules/transactions/services/CreateTransactionService";
import ListTransactionsService from "@modules/transactions/services/ListTransactionsService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class TransactionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { title, amount, category, type } = request.body;
        const { id } = request.user;

        const createTransaction = container.resolve(CreateTransactionService);

        const transaction = await createTransaction.execute({
            title,
            amount,
            category,
            type,
            user_id: id
        });

        return response.json(transaction);
    }

    public async list(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const listTransactions = container.resolve(ListTransactionsService);

        const transactions = await listTransactions.execute(id);

        return response.json(transactions);
    }
}

export default TransactionsController;