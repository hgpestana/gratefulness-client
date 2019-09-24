import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Buddha from '../atoms/Buddha';

class Logo extends Component {
    render() {
        return (
            <Grid item xs={ 12 }>
                <Buddha/>
            </Grid>
        );
    };
}

export default Logo;