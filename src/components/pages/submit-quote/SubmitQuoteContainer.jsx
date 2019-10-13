import React, { Component } from "react";
import SubmitQuotePresentation from "./SubmitQuotePresentation";
import { getRandomInt } from "../../../library/helper";
import { submitQuote } from "../../../library/api";


class SubmitQuoteContainer extends Component {
    snackBarRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            logoVersion: 1,
        };
    }

    componentDidMount() {
        this.setState({
            logoVersion: getRandomInt(1, 3)
        })
    }

    submitCallback = (event) => {
        event.persist();
        event.preventDefault();
        submitQuote(event.target.newQuote.value, event.target.newQuoteAuthor.value)
            .then(response => {
                    if (response.status === 201) {
                        event.target.newQuote.value = '';
                        event.target.newQuoteAuthor.value = '';
                        this.snackBarRef.current.open();
                    }
                }
            );
    };

    render() {
        return (
            <SubmitQuotePresentation { ...this.state } label={ 'Submit quote' } onSubmit={ this.submitCallback }
                                     snackBarRef={ this.snackBarRef }/>
        );
    };
}

export default SubmitQuoteContainer;