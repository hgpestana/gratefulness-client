import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import { BaseTemplateWLinks } from "../templates/BaseTemplateWLinks";
import HomeSection from "../pages/home";
import SubmitQuoteSection from "../pages/submit-quote-section";
import DonateSection from "../pages/donate";


class Router extends Component {
    static propTypes = {
        links: PropTypes.array
    };

    static defaultProps = {
        links: [
            { url: '/', name: 'Home' },
            { url: '/submit-quote', name: 'Submit a quote' },
            { url: '/donate', name: 'Donate' },
        ]
    };

    render() {
        return (
            <BrowserRouter>
                <BaseTemplateWLinks links={ this.props.links }>
                    <Switch>
                        <Route exact path={ '/' } component={ HomeSection }/>
                        <Route exact path={ '/submit-quote' } component={ SubmitQuoteSection }/>
                        <Route exact path={ '/donate' } component={ DonateSection }/>
                    </Switch>
                </BaseTemplateWLinks>
            </BrowserRouter>
        );
    };
}

export default Router;