import { useEffect, useState } from "react";
import { ExpensesDetails } from "../components/Table";
import AddExpenses from "./AddExpenses";

interface ExpenseTrackerProps {
  onTotalChange: (value : number) => void;
}

const ExpenseTracker = (props : ExpenseTrackerProps) => {
  const [MyExpenses , setMyExpenses] = useState<Expense[]>([]);

  const [total , setTotal] = useState<number>(MyExpenses.reduce((amt, ele) => amt + ele.amount, 0));

  useEffect( () => {
    const newTotal = MyExpenses.reduce((amt, ele) => amt + ele.amount, 0);
    setTotal(newTotal);
    props.onTotalChange(newTotal);
  }, [MyExpenses])

  const onRemoveClick  = (title ? : string) => {
    if(title){
      setMyExpenses(MyExpenses.filter((value) => value.title!=title));
    }

    else {
      setMyExpenses([]);
    }

  };

  const onAddExpense = (expense : Expense) => {

    setMyExpenses([expense, ...MyExpenses]);

  }

  return (
    <div>
      <h2> Add Expenses</h2>
      <AddExpenses onAddExpense={onAddExpense}/>

      <hr/>
      <h2> Expenses </h2>
      <ExpensesDetails expenses={MyExpenses} onRemoveClick={onRemoveClick} total={total}/>
    </div>
  )
}

export default ExpenseTracker
