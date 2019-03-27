import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Welcome from './Welcome';
import Task from './Task';
import Survey from './Survey';
import Finish from './Finish';

const BasicRouter = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Welcome} />
                <Route  path="/home" component={Welcome} />                
                <Route  path="/task" component={Task} />
                <Route  path="/survey" component={Survey} />
                <Route  path="/finish" component={Finish} />
            </div>
        </Router>
    );
}

export default BasicRouter;