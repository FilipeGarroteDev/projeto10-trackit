import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;


  input {
    height: 45px;
    padding: 10px;
    border: 1px solid #D4D4D4;
    font-size: 20px;


    &::placeholder{
      color: #dbdbdb;
    }
  }

  button{
    height: 45px;
    background-color: #52b6ff;
    color: #ffffff;
    font-size: 20px;
    border: none;
    border-radius: 4.5px;
    margin-bottom: 25px;
  }
`

const SignUpNavigation = styled.span`
  a{
    font-size: 14px;
    color: #52b6ff;
  }
`


export {Form, SignUpNavigation}