import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function Hello() {
    return <div>hello</div>
}

function Test() {
    return <div>test</div>
}

ReactDom.render((
    <Router>
        <Switch>
            <Route path="/hello" component={Hello}></Route>
            <Route path="/test" component={Test}></Route>
            <Redirect from="/" to="/hello"></Redirect>
        </Switch>
    </Router>
), document.getElementById('root'));