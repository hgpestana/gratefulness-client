import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

class NavigationMenu extends Component {
    static propTypes = {
        links: PropTypes.array,
    };

    createMenuItems = () => {
        let menuItems = [];
        this.props.links.forEach(function (link) {
            menuItems.push(
                <Typography key={ link.name } variant={ 'h6' } color={ 'inherit' } align={ "center" }>
                    <Button color={ 'inherit' } component={ RouterLink } to={ link.url }>
                        { link.name }
                    </Button>
                </Typography>
            );
        });
        return menuItems;
    };

    render() {
        return (
            <AppBar position={ 'sticky' } color={ 'primary' }>
                <Toolbar>
                    { this.createMenuItems() }
                </Toolbar>
            </AppBar>
        );
    };
}

export default NavigationMenu;