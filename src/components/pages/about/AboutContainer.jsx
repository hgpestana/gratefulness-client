import React, { Component } from "react";
import AboutPresentation from "./AboutPresentation";
import { getRandomInt } from "../../../library/helper";


class AboutContainer extends Component {

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
            <AboutPresentation { ...this.state }/>
        );
    };
}

export default AboutContainer;