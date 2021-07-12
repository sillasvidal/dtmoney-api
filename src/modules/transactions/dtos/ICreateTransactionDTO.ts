export default interface ICreateTransactionDTO {
    title: string;
    amount: number;
    category: string;
    type: 'deposit' | 'withdraw';
    user_id: string;
}