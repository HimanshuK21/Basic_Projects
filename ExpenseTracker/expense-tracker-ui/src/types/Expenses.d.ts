type Expense = {
    title : string;
    category : 'Grocery' | 'Clothes' | 'Bills';
    amount: number;
}

type TableColumn = {
    Header : string;
    accessor: string;
}