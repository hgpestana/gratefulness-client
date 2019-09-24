import React, { Component } from "react";
import PropTypes from "prop-types";


class SubmitQuotePresentation extends Component {
    static propTypes = {
        quote: PropTypes.string,
        author: PropTypes.string,
        label: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.string
    };

    render() {
        return (
            <h1>
                Submit Quote
            </h1>
        );
    };
}

export default SubmitQuotePresentation;