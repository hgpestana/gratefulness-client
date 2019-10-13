import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

class GratefulnessButton extends Component {

    static propTypes = {
        label: PropTypes.string,
        type: PropTypes.string,
        callback: PropTypes.func,
    };

    render() {
        return (
            <Button color={ 'primary' }
                    onClick={ this.props.callback }
                    size={ "large" }
                    variant={ "contained" }
                    type={this.props.type}
                    style={ { margin: '20px 10vw', padding: '15px' } }
            >
                { this.props.label }
            </Button>
        );
    };
}

export default GratefulnessButton;