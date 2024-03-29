import React, { Component } from "react";
import { getRandomInt } from "../../../library/helper";
import DonatePresentation from "./DonatePresentation";


class DonateContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logoVersion: 1,
        };
    }

    componentDidMount() {
        this.setState({
            logoVersion: getRandomInt(1, 3)
        })
    }

    render() {
        return (
            <DonatePresentation { ...this.state }/>
        );
    };
}

export default DonateContainer;