import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./components/App.js";
import CodingPage from './pages/CodingPage.js'
import MediaPage from './pages/MediaPage.js'
import AboutPage from './pages/AboutPage.js'
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/code" exact component={CodingPage} />
                    <Route path="/media" component={MediaPage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </Router>
        )
    }
}