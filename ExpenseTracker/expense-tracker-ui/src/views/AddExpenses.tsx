import { useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";

interface AddExpensesProps {
  onAddExpense: (expense: Expense) => void;
}

const AddExpenses = (props : AddExpensesProps) => {
  const options =  ['Grocery' , 'Clothes' , 'Bills'];
  const [selectedOption , setSelectedOption] = useState<"Grocery" | "Clothes" | "Bills">("Grocery");
  const [title, setTitle] = useState<string>('');
  const [amount , setAmount] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const onAddClick = () => {
    if(selectedOption==='' || title === '' || amount <= 0 ){
      setIsError(true);
    }
    else {
      setIsError(false);
      props.onAddExpense({title : title , category: selectedOption , amount : amount});
      setAmount(0);
      setSelectedOption('Grocery');
      setTitle('');
    }
  };

  return (
    <>
    {isError && 
     <ErrorWrapper>
       <span>Please provide the required details all the fields are mendetory.</span>
       <Button type="close" onclick={() => setIsError(false)}></Button>
     </ErrorWrapper>
    }
    <HeaderWrapper>
      <Header>Title</Header>
      <Header>Category</Header>
      <Header>Amount Spent</Header>
    </HeaderWrapper>
    <AddExpensesWrapper>
      <input type='text'  placeholder = 'Add Title' value={title} onChange={(event) => setTitle(event.target.value)}/>
      <select name='category' value={selectedOption} onChange={(event) => setSelectedOption(event.target.value) }>
      {options.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
      </select>
      <input type='number' placeholder="Add Amount" value={amount} onChange={(event) => setAmount(Number(event.target.value))}/>

      <Button type="Add" onclick={onAddClick}/>
      
    </AddExpensesWrapper>
    </>
  )
}

const AddExpensesWrapper = styled.div`
  display : flex;
  justify-content : space-between;
    button {
      padding : 0;
      margin : 0;
      margin-top : 9px;
    }
    input , select {
    width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
    }
`;

const HeaderWrapper = styled.div`
   display: flex;
`;

const Header = styled.div`
  Width : 32%;
  font-weight : 700;
`;

const ErrorWrapper = styled.div`
   background-color : #ef5350;
   color : white;
   display : flex;
   justify-content : space-between;
   button {
     margin-right : 10px;
     background-color : #ef5350;
   }
`;

export default AddExpenses
