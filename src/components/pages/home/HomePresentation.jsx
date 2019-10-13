import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Quote from "../../organisms/Quote";
import GratefulnessButton from "../../molecules/GratefulnessButton";
import Buddha from "../../atoms/Buddha";

class HomePresentation extends Component {

    static propTypes = {
        quote: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        callback: PropTypes.func.isRequired,
        logoVersion: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.quoteContainer = React.createRef();
        this.state = {
            initialHeight: 0
        }
    }

    componentDidMount() {
        const initialHeight = `${ this._getQuoteContainerHeight() }px`;
        this.setState({ initialHeight });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this._isLoaded()) {
            this.quoteContainer.current.style.height = `${ this._getQuoteContainerHeight() }px`;
        } else {
            this.quoteContainer.current.style.height = this.state.initialHeight;
        }
    }

    _getQuoteContainerHeight = () => {
        if (this.quoteContainer.current !== null) {
            return [ ...this.quoteContainer.current.children ].reduce((accumulator, element) => {
                const computedStyle = window.getComputedStyle(element);

                let marginTop = parseInt(computedStyle.marginTop, 10);
                let marginBottom = parseInt(computedStyle.marginBottom, 10);
                let height = parseInt(computedStyle.height, 10);

                marginTop = isNaN(marginTop) ? 0 : marginTop;
                marginBottom = isNaN(marginBottom) ? 0 : marginBottom;
                height = isNaN(height) ? 0 : height;

                return accumulator + marginTop + marginBottom + height;
            }, 0);
        }
        return 0;
    };

    _renderQuote() {
        return (
            <Fragment>
                <Quote quote={ this.props.quote } author={ this.props.author }/>
                <GratefulnessButton label={ this.props.label } callback={ this.props.callback }/>
            </Fragment>
        )
    }

    _renderLoader() {
        return (
            <CircularProgress/>
        );
    }

    _isLoaded() {
        return this.props.quote !== undefined && this.props.quote.length !== 0;
    }

    _render() {
        if (this._isLoaded()) {
            return this._renderQuote();
        } else {
            return this._renderLoader();
        }
    }

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
                        <Grid item xs={ 10 } style={ { margin: '0 auto' } }>
                            <Container ref={ this.quoteContainer } maxWidth={ "md" } className={ 'quote-container' }>
                                { this._render() }
                            </Container>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        );
    };
}

export default HomePresentation;