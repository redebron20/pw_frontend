import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
import Portfolio from './portfolio_container'

const Router = () => {
    return (

        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio' component={ Portfolio } />
        </Switch>
        
    );
};

export default Router;