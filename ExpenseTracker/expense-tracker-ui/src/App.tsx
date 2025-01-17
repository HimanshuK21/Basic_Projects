import {useState } from "react"
import BalanceOverview from "./views/BalanceOverview"
import styled from "styled-components";
import ExpenseTracker from "./views/ExpenseTracker";
import './App.css';



//implement proper Table and styling to the table - done
// Logic of Total Expense calculation is pending -done
// Add Expense is pending - done
// Write Backend for the same and store the data in the postgresql
// Axios fetch from the BE
// Write logic to edit the data in the table.
// Add Date wise sorting logic inthe table where date wise collapse is possible.
function App() {

  const [bugetBalance , setBugetBalance] = useState<number>(5000);
  const [spentBalance , setSpentBalance] = useState<number>(0);
  const [remainingBalance , setRemainingBalance] = useState<number>(bugetBalance-spentBalance);
  const onEdit = (num : number) => {
    setBugetBalance(num);
    setRemainingBalance(num - spentBalance);
  } 
  const buget : Budget = {
    title : 'Buget',
    balance : {
      amount : bugetBalance,
      ccy : 'Rs',
    },
    isEditable:true,
    onEdit : onEdit,
  }

  const remaining : RemainingBalance = {
    title : 'Remaining',
    balance : {
      amount : remainingBalance,
      ccy : 'Rs',
    },
  }

  const spent : SpentBalance = {
    title : 'Spent so far',
    balance : {
      amount : spentBalance,
      ccy : 'Rs',
    },
  }

  const onTotalChange =(val :number) => {
    setSpentBalance(val);
    setRemainingBalance(bugetBalance-val);
  }

  return (
    <AppContainer>
    <BalanceOverview buget={buget} remainingBalance={remaining} spentBalance={spent}/>
    <ExpenseTracker onTotalChange={onTotalChange}/>
    </AppContainer>
  )
}

const AppContainer = styled.div`
    width: 70%;
    margin : auto;
    background-color : #fbf8f8;
    padding : 50px;
    border-radius : 50px;
    height : 800px;
    margin-top : 0px;

`;

export default App
