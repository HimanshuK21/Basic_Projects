import styled from "styled-components";
import Button from "./Button";
import { ChangeEvent, useState } from "react";

interface CardProps {
  title: string;
  amount: number;
  ccy: string;
  isEditable: boolean;
  onEdit? : ( num : number)=> void;
  cardType: 'primary' | 'secondary' | 'tertiary';
}

const Card = (props: CardProps) => {
  const [isFiledEditable , setIsFieldEditable] = useState<boolean>(false);
  const [amount , setAmount] = useState<number>(props.amount);

  const onEditClick = () =>{
    setIsFieldEditable(true);
  }

  const onAddClick = () => {
    setIsFieldEditable(false);
    if(props.onEdit){
      props.onEdit(amount);
    }
  }

  const onChange = (e : ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  }

  return (
    <StyledCard cardtype={props.cardType ?? 'primary'}>
      <span>{props.title} : {props.ccy ?? 'Rs.'}{isFiledEditable ? (<input type="number" value={amount} onChange={onChange}/>) : props.amount}
      </span>
        {props.isEditable && ( isFiledEditable  ? (<Button onclick={onAddClick} type="Add"/>) : (<Button onclick={onEditClick} type="Edit"/>))}
    </StyledCard>
  )
}

const StyledCard = styled.div<{ cardtype: string }>`
border-radius : 4px;
display : flex;
justify-content : space-between;
height : 100px;

>span {
   padding-left : 20px;
   margin-top : auto;
   margin-bottom :auto;
}
 input {
    width: 70%;
  padding: 12px;
  margin: 0;
  box-sizing: border-box;
    }

background-color : ${({ cardtype }) => cardtype === 'primary' ? '#b9b7b7' : cardtype === 'secondary' ? '#9fdf9f' : '#75bddf78'}
     
`;

export default Card
