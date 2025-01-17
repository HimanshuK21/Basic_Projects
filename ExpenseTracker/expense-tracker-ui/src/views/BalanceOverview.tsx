import styled from "styled-components"
import Card from "../components/Card";

interface BalanceOverviewProps {
    buget: Budget,
    remainingBalance: RemainingBalance,
    spentBalance: SpentBalance,
}

const BalanceOverview = (props : BalanceOverviewProps) => {
  return (
    <>
    <h2>My Buget Planner</h2>
    <StyledBalanceOverview>
      <Card amount={props.buget.balance.amount} cardType="primary" ccy={props.buget.balance.ccy} isEditable={props.buget.isEditable} title={props.buget.title} key={'buget'} onEdit={props.buget.onEdit}/>
      <Card amount={props.remainingBalance.balance.amount} cardType="secondary" ccy={props.remainingBalance.balance.ccy} isEditable={false} title={props.remainingBalance.title} key={'remaining'}/>
      <Card amount={props.spentBalance.balance.amount} cardType="tertiary" ccy={props.spentBalance.balance.ccy} isEditable={false} title={props.spentBalance.title} key={'spentBalance'}/>
    </StyledBalanceOverview>
    </>
  )
}

const StyledBalanceOverview = styled.div`
   display : grid;
   gap : 50px;
   grid-template-columns: auto auto auto ;
`;

export default BalanceOverview
