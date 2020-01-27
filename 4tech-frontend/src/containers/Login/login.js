import React, { useState, useEffect} from 'react';
import {Button,TextField,Grid,Paper, Typography} from '@material-ui/core'
import './login.css'
const Login = () => {
    const [login, setLogin] = useState('');
    const [fullName, setFullName] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        console.log('Alterei o login');
        return(() => {
            console.log('terminei mae!');
        }) 
    },[login])

    const onLoginChange = (event) => {
        console.log(event.target.value);
        setLogin(event.target.value);
    }
    return (
    
        <div className="login">
            <Grid item xs={2} className="grid">
                <Paper className="paper">
                    <form>
                        <Typography varian="h6">
                            Login - 4T Instagram
                        </Typography>
                        <TextField
                            id="fullName"
                            label="Full name"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            required
                        /> 
                        <TextField
                            id="userLogin"
                            label="User Login"
                            value={userLogin}
                            onChange={(event) => setUserLogin(event.target.value)}
                            required
                        /> 
                        <TextField
                            type="password"
                            id="password"
                            label="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        /> 
                        <Button color="primary">Sign in</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;