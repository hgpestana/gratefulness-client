import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Buddha from "../../atoms/Buddha";
import { TextField } from "@material-ui/core";
import Form from "../../atoms/Form";
import GratefulnessButton from "../../molecules/GratefulnessButton";
import BasicSnackbar from "../../molecules/BasicSnackbar";


class SubmitQuotePresentation extends Component {
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
                                <Buddha version={ this.props.logoVersion }/>
                            </Container>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Container ref={ this.quoteContainer } maxWidth={ "md" }
                                       className={ 'new-quote-container' }>
                                <Form id={ 'new-quote-form' } submitCallback={ this.props.onSubmit }>
                                    <TextField
                                        id="new-quote"
                                        name="newQuote"
                                        label="Quote"
                                        helperText="Please input the quote you want to submit."
                                        margin={ "normal" }
                                        required={ true }
                                        fullWidth
                                    />
                                    <TextField
                                        id="new-quote-author"
                                        name="newQuoteAuthor"
                                        label="Author"
                                        helperText="Please input the author of the quote."
                                        margin={ "normal" }
                                        required={ true }
                                        fullWidth
                                    />
                                    <GratefulnessButton label={ this.props.label } type={ 'submit' }/>
                                </Form>
                            </Container>
                        </Grid>
                    </Grid>
                </Paper>
                <BasicSnackbar ref={ this.props.snackBarRef } text={ 'Quote submitted successfully.' }/>
            </Container>
        );
    };
}

export default SubmitQuotePresentation;