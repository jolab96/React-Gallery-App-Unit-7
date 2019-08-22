import React from "react";

// importing Components from react-router-dom module

import { BrowserRouter as MainRouter, Route, Switch, NavLink } from "react-router-dom";

//importing our Components to to display in the Router component

import Home from './Home';
import Searcher from './Searcher';
import Gallery from './Gallery';
import Header from './Header';
import Error from './Error';


function Router() {
    return (
        <MainRouter>
            <Header />
            <Searcher />
            <div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <NavLink to="/gallery/Basketball">Basketball</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery/Music">Music</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery/Sneakers">Sneakers</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>


            {/* 3 swich routes for Home, Gallery, and Error pages
    */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery/:searchName" component={Gallery} />
                <Route component={Error} />
            </Switch>
        </MainRouter>
    );
}

export default Router;