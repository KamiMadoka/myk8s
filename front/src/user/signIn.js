import React, { useState } from 'react';
import { Input } from 'my-react-ui';
import { myaxios } from 'util';

function SignIn() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleClcik() {
        console.log(username, email, password)
        if (username && email && password) {
            myaxios.post('/user', {
                username,
                email,
                password
            }).then(res => console.log(res))
        }
        myaxios.delete('/user/1').then(res => console.log(res))
        myaxios.get('/user').then(res => console.log(res))
    }

    return (
        <div>
            <div>Username</div>
            <Input getValue={setUsername} />
            <div>Email</div>
            <Input getValue={setEmail} />
            <div>Paasword</div>
            <Input getValue={setPassword} />
            <div onClick={handleClcik}>CLick</div>
        </div>
    );
}

// 登陆
export default SignIn;