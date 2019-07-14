import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Services from './services';
import Book from './book';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />  
        <Route exact path="/services" component={Services} />
        <Route exact path="/book" component={Book} />
    </Switch>
)

export default Main;