import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import User from './user';
function Hello() {
    return <div>hello</div>
}

function Test() {
    return <div>test</div>
}

ReactDom.render((
    <Router>
        <Switch>
            <Route path="/user" component={User}></Route>
            <Route path="/hello" component={Hello}></Route>
            <Route path="/test" component={Test}></Route>
            <Redirect from="*" to="/user"></Redirect>
        </Switch>
    </Router>
), document.getElementById('root'));