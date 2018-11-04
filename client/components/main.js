import React from 'react';
import { Link } from 'react-router-dom';
import Photogrid from './photogrid';
import Single from './single';
import { Switch, Route } from 'react-router-dom';

export default class Main extends React.Component {
    render() {
        const props = this.props;

        return (
            <div>
                <Link to="/"><h1>Rodriguezstagram</h1></Link>

                <Switch>
                    <Route path='/view/:postId' render={(routerProps) => {
                        return <Single {...props} {...routerProps} />
                    }}></Route>
                    <Route path='/photogrid' render={(routerProps) => {
                        return <Photogrid {...props} {...routerProps} />
                    }}></Route>
                    <Route exact path='/' render={(routerProps) => {
                        return <Photogrid {...props} {...routerProps} />
                    }}></Route>
                </Switch>
            </div>
        )
    }
}