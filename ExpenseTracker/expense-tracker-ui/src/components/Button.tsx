import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

interface ButtonProps {
  type: string;
  onclick?: () => void;
  width? : string;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper width={props.width ?? 'initial'}>
      {props.type && props.type === 'close' ? (<StyledImageButton onClick={props.onclick} />) : <StyledTextButton onClick={props.onclick}>{props.type ?? 'Edit'}</StyledTextButton>}
    </ButtonWrapper >
  )
}

const ButtonWrapper = styled.div<{width: string}>`
display : inline-flex;
width : ${({width}) => width} !important
`;

const StyledTextButton = styled.button`
    
padding : 10px;
         background-color : blue;
         color : white;
         width : 70px;
         border : none;
         border-radius : 5px;
         margin-right : 20px;
         margin-top : 30px;
         height : 40px;

`;

const StyledImageButton = styled(CloseIcon)`
    
padding : 0;
        margin : 0;
       width: 25px;
    height: 25px;
    border: none;
    color: blue;

`;



export default Button;
