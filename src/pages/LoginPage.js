import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {loginFunction} from "../actions/loginActions";
import LoginBox from "../components/forms/LoginBox/LoginBox";
import {StyledContainer, StyledLoginContainer, StyledSubContainer} from "../styles/PageStyles";


const LoginPage = ({loginFunction, loginReducer, history}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <StyledContainer>
                <StyledLoginContainer>
                    <LoginBox loginOnChange={e => setLogin(e.target.value)}
                              passwordOnChange={e => setPassword(e.target.value)}
                              loginFunction={() => loginFunction(login, password, () => history.push('/main'), () => console.log('error'))}
                    />
                </StyledLoginContainer>
            </StyledContainer>
        </>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password, successCallback, errorCallback) => dispatch(loginFunction(login, password, successCallback, errorCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));