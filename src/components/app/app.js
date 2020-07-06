import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import {Route, Switch} from 'react-router-dom';

import './app.css';

import {connect} from 'react-redux';

const App = ({total}) => {
    return (
        <div className="app">
            <AppHeader total={total}/>
            <Switch>
                <Route path='/' exact><MainPage/></Route>
                <Route path='/cart' exact><CartPage/></Route>
                <Route path = '/:id'><ItemPage/></Route>
            </Switch>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        total: state.totalPrice
    }
}

export default connect(mapStateToProp)(App);