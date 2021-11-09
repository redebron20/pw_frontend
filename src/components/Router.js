import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import Portfolio from './portfolio_container'
import ProjectShow from './project/project_show'
import NewProject from './project/project_form'

const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={ Portfolio } />
            <Route exact path='/projects/:projectId' component={ ProjectShow } />
            <Route exact path='/newproject' component={NewProject} />
        </Switch>
        
    );
};

export default Router;