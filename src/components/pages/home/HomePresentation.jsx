import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Logo from "../../molecules/Logo";
import Quote from "../../organisms/Quote";
import QuoteButton from "../../molecules/QuoteButton";


class HomePresentation extends Component {
    static propTypes = {
        quote: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Grid>
                <Logo/>
                <Quote quote={ this.props.quote } author={ this.props.author }/>
                <QuoteButton label={ this.props.label } href={ this.props.href } />
            </Grid>
        );
    };
}

export default HomePresentation;