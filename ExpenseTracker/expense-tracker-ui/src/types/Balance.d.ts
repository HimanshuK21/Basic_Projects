type Budget = {
    title: string;
    balance: Balance;
    isEditable : boolean;
    onEdit?: (num : number) => void;
}

type RemainingBalance = {
    title: string;
    balance: Balance;
}

type SpentBalance = {
    title: string;
    balance: Balance;
}

type Balance = {
    amount: number;
    ccy: string;
}