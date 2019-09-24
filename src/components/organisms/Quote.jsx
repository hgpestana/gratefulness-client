import React, { Component } from "react";
import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Quote extends Component {
    static propTypes = {
        quote: PropTypes.string,
        author: PropTypes.string
    };

    render() {
        return (
            <Grid item xs={ 12 }>
                <Paper>
                    <Typography>
                        "{ this.props.quote }"
                    </Typography>
                    <Typography>
                        - { this.props.author }
                    </Typography>
                </Paper>
            </Grid>
        );
    };
}

export default Quote;