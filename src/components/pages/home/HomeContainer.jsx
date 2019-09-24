import React, { Component } from "react";
import PropTypes from "prop-types";
import HomePresentation from "./HomePresentation";
import { getQuote } from "../../../library/api";


class HomeContainer extends Component {
    static propTypes = {
        quote: PropTypes.string,
        author: PropTypes.string,
        label: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.string
    };

    componentDidMount() {
        getQuote()
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            console.log(data);
                        })
                }
            })
    }

    render() {
        return (
            <HomePresentation quote={'Lorem ipsum'} author={'Blabla'} label={'New quote'} href={'/'}/>
        );
    };
}

export default HomeContainer;