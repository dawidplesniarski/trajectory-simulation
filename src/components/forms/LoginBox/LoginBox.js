import React from "react";
import { LoginBoxWrapper, StyledTitle } from './LoginBox.styles';
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";

const LoginBox = ({loginFunction, loginOnChange, passwordOnChange, buttonDisabled}) => {
    return(
        <LoginBoxWrapper>
            <StyledTitle>Login</StyledTitle>
            <TextInput onChange={loginOnChange} type={'text'} name={'login'} placeholder={'Podaj login'}/>
            <TextInput onChange={passwordOnChange} type={'password'} name={'password'} placeholder={'Podaj hasło'}/>
            <Button onClick={loginFunction} disabled={buttonDisabled}>Login</Button>
        </LoginBoxWrapper>
    );
};

export default LoginBox;