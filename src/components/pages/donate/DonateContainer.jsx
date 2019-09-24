import React, { Component } from "react";
import PropTypes from "prop-types";
import DonatePresentation from "./DonatePresentation";


class DonateContainer extends Component {
    static propTypes = {
        quote: PropTypes.string,
        author: PropTypes.string,
        label: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.string
    };

    render() {
        return (
            <DonatePresentation/>
        );
    };
}

export default DonateContainer;