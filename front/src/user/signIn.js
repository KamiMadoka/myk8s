import React, { useState } from 'react';
import { Input } from 'my-react-ui';

function SignIn() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleClcik() {
        console.log(username, email, password)
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