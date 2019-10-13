import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Buddha from "../../atoms/Buddha";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


class DonatePresentation extends Component {
    static propTypes = {
        logoVersion: PropTypes.number,
        snackBarRef: PropTypes.object,
        label: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
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
                                { /**Donate section*/ }
                                <Typography variant={ "h4" } align={ "justify" } style={ { marginBottom: '10px' } }>
                                    Donate
                                </Typography>
                                <Typography variant={ "h5" } align={ "justify" } style={ { marginBottom: '10px' } }>
                                    How can I help?
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    Do you like this project? Do you want to help to keep it alive?
                                    If you wish to support the project and continued development, you can donate any
                                    amount you want. All donations only serve to cover costs of running the server and
                                    if excess is generated, to advance this project.
                                </Typography>
                                <Typography variant={ "h5" } align={ "justify" } style={ { marginBottom: '10px' } }>
                                    How do I donate?
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    You can donate by clicking in the donate button below. All donations are made
                                    through Paypal.
                                </Typography>
                                <Typography variant={ "h5" } align={ "justify" } style={ { marginBottom: '10px' } }>
                                    What do i get for a donation?
                                </Typography>
                                <Typography variant={ "body1" } paragraph={ true } align={ "justify" }>
                                    Aside for your support for the project, you get an honorable mention in the
                                    gratefulness.guru as a benefactor that wants to help spread gratitude throughout the
                                    world.
                                </Typography>
                                <Button color={ 'primary' }
                                        href={ 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5UZA92F5DU6B8&source=url' }
                                        size={ "large" }
                                        variant={ "contained" }
                                        target={ '_blank' }
                                        style={ { margin: '20px 10vw', padding: '15px' } }
                                >
                                    Donate with Paypal
                                </Button>
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

export default DonatePresentation;