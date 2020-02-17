import React, { useState } from 'react';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const updateUserName = e => {
        setUserName(e.target.value);
    };
    const updatePassword = e => {
        setPassword(e.target.value);
    };
    
    const doLogin = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                password,
            }),
        })
        .then(res => {
            if(res.status >= 400) {
                setMessage('Incorrect username or password');
            } else {
                setMessage('')
                return res.json();
            }
            
        })
        .catch(error => {
            setMessage(error.message);
            console.log('error', error);
            
        });
    };
    return (
        <div>
            <h1>Login</h1>
            {message && message}
            <div>
                <div>
                    <input type="text" onChange={updateUserName} placeholder="User Name" />
                </div>
                <div>
                    <input type="password" onChange={updatePassword} placeholder="Password" />
                </div>
                <div>
                    <button onClick={doLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
