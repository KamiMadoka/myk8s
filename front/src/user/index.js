import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SignIn from './signIn';
import SignUp from './signUp';

function User() {
    return (
        <div>
            <Route path="/user/signIn" component={SignIn}></Route>
            <Route path="/user/signUp" component={SignUp}></Route>
            <Redirect from="*" to="/user/signIn"></Redirect>
        </div>
    );
}

export default User;