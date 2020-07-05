import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import {Route, Switch} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact><MainPage/></Route>
                <Route path='/cart' exact><CartPage/></Route>
                <Route path = '/:id'><ItemPage/></Route>
            </Switch>
        </div>
    )
}

export default App;