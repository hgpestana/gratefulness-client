import React, { Component } from "react";
import PropTypes from "prop-types";
import NavigationMenu from "./NavigationMenu";

class Header extends Component {
    static propTypes = {
        links: PropTypes.array
    };
    render() {
        return (
            <header>
                <NavigationMenu links={this.props.links}/>
            </header>
        );
    };
}

export default Header;