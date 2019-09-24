import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

class QuoteButton extends Component {
    static propTypes = {
        label: PropTypes.string,
        href: PropTypes.string,
    };

    render() {
        return (
            <Grid item xs={ 12 }>
                <Button color={ 'inherit' } component={ RouterLink } to={ this.props.href }>
                    { this.props.label }
                </Button>
            </Grid>
        );
    };
}

export default QuoteButton;