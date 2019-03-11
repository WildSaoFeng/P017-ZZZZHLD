import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Welcome from './Welcome';
import Task from './Task';

const BasicRouter = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Welcome} />
                <Route  path="/task" component={Task} />
            </div>
        </Router>
    );
}

export default BasicRouter;