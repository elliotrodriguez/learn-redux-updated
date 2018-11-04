import React from 'react';
import {render} from 'react-dom';
import Main from './components/main';
import css from './styles/style.styl';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Single from './components/single';
import Photogrid from './components/photogrid';
import {Provider} from 'react-redux'
import store from './store';

render( 
    <Provider store = {store}>
        <BrowserRouter>
            <Main>
                <Switch>
                    <Route path='/view/:postId' component={Single}></Route>
                    <Route path='/' component={Photogrid}></Route>
                </Switch>
            </Main>
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
