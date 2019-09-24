import React, { Component, Fragment } from 'react';
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import PropTypes from "prop-types";
import './BaseTemplateWLinks.scss';

export class BaseTemplateWLinks extends Component {
    static propTypes = {
        links: PropTypes.array
    };

    render() {
        return (
            <Fragment>
                <Header links={this.props.links}/>
                <main id={ 'main' }>
                    { this.props.children }
                </main>
                <Footer links={this.props.links}/>
            </Fragment>
        );
    }
}