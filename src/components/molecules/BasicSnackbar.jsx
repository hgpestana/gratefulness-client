import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";


class BasicSnackbar extends Component {
    static propTypes = {
        text: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    open = () => {
        this.setOpen(true);
    };

    setOpen = (open) => {
        this.setState({ open })
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setOpen(false);
    };

    message = () => {
        return (
            <span id="message-id">
                { this.props.text }
            </span>
        );
    };

    render() {
        return (
            <Snackbar
                ref={ this.ref }
                anchorOrigin={ {
                    vertical: 'top',
                    horizontal: 'center',
                } }
                open={ this.state.open }
                autoHideDuration={ 6000 }
                onClose={ this.handleClose }
                ContentProps={ {
                    'aria-describedby': 'message-id',
                } }
                message={ this.message() }
                action={ [
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        onClick={ this.handleClose }
                    >
                        <CloseIcon/>
                    </IconButton>,
                ] }
            />
        );
    }
}

export default BasicSnackbar;