import styled from "styled-components";
import Button from "./Button";

interface TableProps {
  expenses: Expense[]; 
  onRemoveClick:(title?: string) => void;
  total: number;
}

const Table = (props : TableProps) => {
  return (
    <>
    <table>
        <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount Spent</th>
        </tr>
        {props.expenses.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.title}</td>
                            <td>{val.category}</td>
                            <td>{val.amount}</td>
                        </tr>
                    )
                })}
    </table>
</>
  )
}

export const ExpensesDetails = (props : TableProps) => {
  const handleRemove = (val?: string) => {
    console.log(val);
    props.onRemoveClick(val);

  }
  return (
    <ExpenseWrapper>
      {props.expenses.length > 0 && 
      <>
        <Box>
          <Header>Title</Header>
            <Header>Category</Header>
            <Header>Amount Spent</Header>
            <Header></Header>
        </Box>
        <>
          {props.expenses.map((val, key) => {
                    return (
                        <Record key={key}>
                            <div>{val.title}</div>
                            <div>{val.category}</div>
                            <div>{val.amount}</div>
                            <Button type="close" onclick={() => handleRemove(val.title)} width={'80px'} />
                        </Record>
                    )
                })}
        </>
        <Box>
          <Footer>Total :</Footer>
          <Footer>{props.total}</Footer>
          <Footer><Button type="Clear All" onclick={() => handleRemove()}/></Footer>
        </Box>
        </>
      }
      
    </ExpenseWrapper>
  );

}

const ExpenseWrapper = styled.div`
    display : block;
    border : 1px solid grey;
    border-bottom : none;
`;

const Box = styled.div`
   display : flex;
   border-bottom : 1px solid grey;
   justify-content : space-between;
`;

const Header = styled.div`
   align-content : center;
   font-weight : 700;
   padding : 10px;
   button {
     margin : 0px;
     padding : 0px;
   }
`;

const Record = styled.div`
  display: flex;
  border-bottom : 1px solid grey;
 div {
  width : 40%;
  align-content : center; 
  padding : 10px;
 }

 button {
   margin-top : 10px;
   margin-bottom : 10px;
 }
`;

const Footer = styled.div`
   font-weight : 700;
   padding : 10px;
   margin : 10px;
   button {
     margin : 0px;
     padding : 0px;
   }
`;

export default Table
