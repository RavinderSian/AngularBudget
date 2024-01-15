export class Expense {
  id: number;
  userId: number;
  category: string;
  amount: number;
  description: string;
  purchaseDate: Date;

  constructor(
    id: number,
    userId: number,
    category: string,
    amount: number,
    description: string,
    purchaseDate: Date
  ) {
    this.id = id;
    this.userId = userId;
    this.category = category;
    this.amount = amount;
    this.description = description;
    this.purchaseDate = purchaseDate;
  }
}
