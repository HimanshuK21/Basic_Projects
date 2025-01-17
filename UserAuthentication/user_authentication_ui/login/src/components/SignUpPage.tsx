import { useState } from 'react';
import styled from 'styled-components'

const SignUpPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoginPage, setIsLoaginPage] = useState<boolean>(false);
    const [isEmailValid , setIsEmailValid] = useState<boolean>(true);
    const [isPasswordValid , setIsPasswordValid] = useState<boolean>(true);


    const OnButtonClick = () => {
      validateEmail(); 
      validatePassword();        
    }
    const onAlternateButtonClick = () => {
      setIsLoaginPage(!isLoginPage);
    }

    const validateEmail = () => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(pattern.test(email));
    }

    const validatePassword = () => {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
      setIsPasswordValid(pattern.test(password));
    }

  return (
    <>
    <SignUpWrapper>
      <SignUpHeading>User Sign Up</SignUpHeading>
      <SignUpContent>
        {!isEmailValid && <ErrorDiv> Please provide proper Email Id.</ErrorDiv>}
        <input type='email' placeholder='Enter your email id' name='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
      </SignUpContent>
      <SignUpContent>
        <input type='password' placeholder='Enter your password' name='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
      </SignUpContent>
      <button onClick={OnButtonClick}>{isLoginPage? `Log in` : `Sign Up`}</button>
    </SignUpWrapper>
    <AleternateOption><AlternateButton onClick={onAlternateButtonClick}>{isLoginPage? `Sign Up for Application` : `Already have and account?`}</AlternateButton></AleternateOption>

    {!isPasswordValid && <ErrorPassword id="message">
  <h3>Password must contain the following:</h3>
  <p id="letter">A <b>lowercase</b> letter</p>
  <p id="capital">A <b>capital (uppercase)</b> letter</p>
  <p id="number">A <b>number</b></p>
  <p id="length">Minimum <b>8 characters</b></p>
</ErrorPassword>}
    </>
  )
}


const SignUpWrapper = styled.div`
  background-color : white;
  padding : 10px;
  width : 400px;
  margin : 400px auto 0;
  border-radius : 8px;
  button {
     color : white;
     background-color: green;
    }
`;

const SignUpHeading = styled.div`
padding : 10px;
color : blue;
display : flex;
justify-content : flex-start;
font-size : 24px;
line-height : 28px;
fonr-weight : 600;
border-bottom : 1px solid white;

`;

const SignUpContent = styled.div`
  color : white;
  margin-top : 10px;
  margin-bottom : 10px;

  input {
    padding : 10px;
    border : 1px solid black;
    border-radius : 8px;
    backgroud-color: #a7afb3 ; 
    width : 75%;
    font-size : 17px;
    margin: 0 auto;
  }
`;

const AleternateOption = styled.div`
   padding : 10px;
`;

const AlternateButton = styled.button`
   color : blue;
   background-color : #f2f4f7;
   &:focus , &:focus-visible {
     outline: none;
     border : none;
   }
   
   &:hover{
      border : none;
   } 
`;

const ErrorDiv = styled.div`
   background-color : red;
   color : white;
   margin : 10px;
   padding : 5px 0;
`;


const ErrorPassword = styled.div`
  border : 1px solid white;
  width : 400px;
  border-radius : 4px;
  margin : auto;

`;
export default SignUpPage
