import React, { useState, useEffect } from 'react';
import TextField from '../../component/FormField/TextField';
import { withStyles, Paper, Button, Typography, FormHelperText } from '@material-ui/core';
import loginStyle from './loginStyle';
import logo from '../../logo.svg';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../actions/login-actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import cookie from '../../utils/Cookie';

function Login(props) {
    let [username, onChangeUsername] = useState(''),
        [password, onChangePassword] = useState(''),
        [invalidCredential, setCredentialStatus] = useState(true);

    let cookieUsername = cookie.get('username');
    let cookiePassword = cookie.get('password');
    if (cookieUsername && cookiePassword) {
        props.history.push('/dashboard');
    }
    
    const onSubmitCredential = () => {
        if (username !== "" && password !== "") {
            props.loginRequest(username, password)
                .then((response) => {
                    setCredentialStatus(response);
                    if (response) props.history.push('/dashboard');
                });
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmitCredential();
    }

    let { classes, isLoginProgess, isLoggedIn } = props;
    let disableButton = !(username && password) || false;
    if (isLoggedIn)
        return <Redirect to={{ pathname: '/dashboard' }} />
    return <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
            <img src={logo} className={classes.logo} alt="logo" />
            <form onSubmit={onFormSubmit}>
                <TextField
                    label="Username"
                    placeholder="Username"
                    className={classes.textField}
                    value={username}
                    onChange={(e) => onChangeUsername(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Username"
                    placeholder="Username"
                    className={classes.textField}
                    fullWidth
                    onChange={(e) => onChangePassword(e.target.value)}
                    value={password}
                    type="password"
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={disableButton || isLoginProgess}
                    className={classes.button}>
                    {isLoginProgess ? 'Loging...' : 'Login'}
                </Button>
            </form>
            {!invalidCredential && <Typography
                variant="body2"
                className={classes.errorMessage}>
                Invalid credential
            </Typography>}
        </Paper>
    </div>
}


const mapStateToProps = (state) => ({
    isLoginProgess: state.loginReducers.isLoginProgess,
    isLoggedIn: state.loginReducers.isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(loginActions, dispatch);
}

export default withStyles(loginStyle)(connect(mapStateToProps, mapDispatchToProps)(Login));

