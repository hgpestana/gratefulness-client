import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import { BaseTemplateWLinks } from "../templates/BaseTemplateWLinks";
import Home from "../pages/home";
import About from "../pages/about";
import SubmitQuote from "../pages/submit-quote";
import Donate from "../pages/donate";


class Router extends Component {
    static propTypes = {
        links: PropTypes.array
    };

    static defaultProps = {
        links: [
            { url: '/', name: 'Home' },
            { url: '/about', name: 'About' },
            { url: '/submit-quote', name: 'Submit a quote' },
            { url: '/donate', name: 'Donate' },
        ]
    };

    render() {
        return (
            <BrowserRouter>
                <BaseTemplateWLinks links={ this.props.links }>
                    <Switch>
                        <Route exact path={ '/' } component={ Home }/>
                        <Route exact path={ '/about' } component={ About }/>
                        <Route exact path={ '/submit-quote' } component={ SubmitQuote }/>
                        <Route exact path={ '/donate' } component={ Donate }/>
                    </Switch>
                </BaseTemplateWLinks>
            </BrowserRouter>
        );
    };
}

export default Router;