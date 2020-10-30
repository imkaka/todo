import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../containers/Home';
import TaskDetail from '../containers/TaskDetail';

const RouterComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/TaskDetail:id"  component={TaskDetail}/>
            </Switch>
        </Router>
    )
}

export default RouterComponent;