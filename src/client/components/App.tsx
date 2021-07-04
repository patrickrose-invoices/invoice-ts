import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation, useParams} from "react-router-dom";
import Home from "./Home";
import './App.scss';
import Navbar, {NavbarProps} from "./Navbar";



const App = function (): JSX.Element {

    return <>
        <header>
            <Navbar loggedIn={{username: 'Test'}} />
        </header>
        <main className="container">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </main>
    </>
}

interface GameRoute {
    game: string
}

function Game() {
    const {game} = useParams<GameRoute>();

    return (
        <div>
            <h3>ID: {game}</h3>
        </div>
    );
}

function NoMatch() {
    const location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default App;

