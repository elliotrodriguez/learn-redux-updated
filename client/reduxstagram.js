import React from 'react';
import {render} from 'react-dom';
import Main from './components/main';
import css from './styles/style.styl';
import { BrowserRouter } from 'react-router-dom';


render( 
    <BrowserRouter>
        <Main><p>Hello</p></Main>
    </BrowserRouter>, 
    document.getElementById('root')
);
