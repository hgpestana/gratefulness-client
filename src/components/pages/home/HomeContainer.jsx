import React, { Component } from "react";
import HomePresentation from "./HomePresentation";
import { getQuote } from "../../../library/api";
import { getRandomInt } from "../../../library/helper";


class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            logoVersion: 1,
        };
    }

    resetQuote = () => {
        this.setState({
            quote: '',
            author: '',
        })
    };

    setQuote = () => {
        setTimeout(() => {
            getQuote()
                .then(response => {
                    if (response.status === 200) {
                        response.json()
                            .then(data => {
                                this.setState({
                                    quote: data[0].sentence,
                                    author: data[0].author,
                                })
                            })
                    }
                })
        }, 2000)
    };

    reloadQuote = () => {
        this.resetQuote();
        this.setQuote();
    };

    componentDidMount() {
        this.setQuote();
        this.setState({
            logoVersion: getRandomInt(1, 3)
        })
    }

    render() {
        console.log(this.state);
        return (
            <HomePresentation { ...this.state } label={ 'New quote' } callback={ this.reloadQuote }/>
        );
    };
}

export default HomeContainer;