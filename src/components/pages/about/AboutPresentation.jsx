import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Buddha from "../../atoms/Buddha";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

class AboutPresentation extends Component {

    static propTypes = {
        logoVersion: PropTypes.number
    };

    render() {
        return (
            <Container maxWidth="md">
                <Paper>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 12 }>
                            <Container maxWidth={ "md" }>
                                <Buddha version={ this.props.logoVersion } width={ '20%' }/>
                            </Container>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Container ref={ this.quoteContainer } maxWidth={ "md" } className={ 'about' }>

                                { /** What is gratefulness section*/ }
                                <Typography variant={ "h4" } align={ "justify" } style={ { marginBottom: '10px' } }>
                                    What is gratefulness?
                                </Typography>
                                <Typography variant={ "h6" } align={ "justify" }>
                                    <strong>grateful[ greyt-fuhl ]</strong>
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    <em>adjective</em>
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    - warmly or deeply appreciative of kindness or benefits received; thankful:<br/>
                                    <em>I am grateful to you for your help.</em>
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    - expressing or actuated by gratitude:<br/>
                                    <em>a grateful letter.</em>
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    - pleasing to the mind or senses; agreeable or welcome; refreshing:<br/>
                                    <em>a grateful breeze.</em><br/>
                                </Typography>

                                { /** About the project section*/ }
                                <Typography variant={ "h4" } align={ "justify" } style={ { marginBottom: '10px' } }>
                                    About the project
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    This project is born as a personal pet project of mine (<Link
                                    href={ 'https://hgpestana.software' } target={ "_blank" }>@hgpestana</Link>) that
                                    allows me to merge two great passions of mine, spirituality and software
                                    development.
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    The project was developed in React using the material-ui react component and, as a
                                    backend, it uses the API Platform.
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    The purpose of this site is solely to dispense grateful quotes that one can use to
                                    feel inspired or to learn more about oneself.
                                </Typography>

                                { /** Kudos section*/ }
                                <Typography variant={ "h4" } align={ "justify" } style={ { marginBottom: '10px' } }>
                                    Kudos
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    <strong>Images:</strong> <Link
                                    href={ "https://www.freepik.com/free-photos-vectors/hand" }
                                    target={ "_blank" }> Hand vector created by
                                    freepik - www.freepik.com</Link><br/>
                                    <strong>Content:</strong> To all the good people who decided to share their wisdom
                                    with the world!
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        );
    };
}

export default AboutPresentation;