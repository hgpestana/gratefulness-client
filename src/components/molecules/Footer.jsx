import React, { Component } from "react";
import PropTypes from "prop-types";
import NavigationMenu from "./NavigationMenu";

class Footer extends Component {
    static propTypes = {
        links: PropTypes.array
    };
    render() {
        return (
            <footer>
                <NavigationMenu links={this.props.links}/>
            </footer>
        );
    };
}

export default Footer;