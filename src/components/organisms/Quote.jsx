import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography";

class Quote extends Component {
    static propTypes = {
        quote: PropTypes.string,
        author: PropTypes.string
    };

    render() {
        return (
            <Fragment>
                <Typography id={'quote'} paragraph={true} align={"justify"}>
                    "{ this.props.quote }"
                </Typography>
                <Typography id={'author'} align={"right"} paragraph={true}>
                    - { this.props.author }
                </Typography>
            </Fragment>
        );
    };
}

export default Quote;