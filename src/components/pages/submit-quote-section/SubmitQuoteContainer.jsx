import React, { Component } from "react";
import PropTypes from "prop-types";
import SubmitQuotePresentation from "./SubmitQuotePresentation";


class SubmitQuoteContainer extends Component {
    static propTypes = {
        quote: PropTypes.string,
        author: PropTypes.string,
        label: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.string
    };

    render() {
        return (
            <SubmitQuotePresentation/>
        );
    };
}

export default SubmitQuoteContainer;