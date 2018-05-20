//todo: w propsach wpada tabela, ma być w selectorze rozwijanym do wyboru
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

export
    class SearchForm extends Component {
        constructor(props){
            super(props);
            this.state = {...this.defaultState};
        }

    defaultState = {
        flightFrom: 'CDG',
        flightFromCode: 'ATL',
        flightTo: 'PEK',
        flightToCode: 'PEK',
        departureDate: '',
        returnDate: ''
    }

    handleFlightFromChange = (event) => {
        this.setState({
            flightFrom: event.target.value,
            flightFromCode: event.target.value
        })
    }

    handleFlightToChange = (event) => {
        this.setState({
            flightTo: event.target.value,
            flightToCode: event.target.value,
        })
    }

    handleDepartureDateChange = (event) => {
        this.setState({
            departureDate: event.target.value,
        })
    }

    handleReturnDateChange = (event) => {
        this.setState({
            returnDate: event.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { flightFrom, flightTo, departureDate, returnDate, flightFromCode, flightToCode} = this.state;
        this.props.submit(flightFromCode, flightToCode, departureDate, returnDate);
    }

    handleReset = (e) => {
        this.setState({
            flightFrom: '',
            flightFromCode: '',
            flightTo: '',
            flightToCode: '',
            returnDate: '',
            departureDate: ''
        })
    }

    render() {
        const { initialValues } = this.props;
        const { flightFrom, flightTo, departureDate, returnDate, flightFromCode, flightToCode } = this.state;

        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    onReset={this.handleReset}
                >
                    From:
                <select
                        onChange={this.handleFlightFromChange}
                        value={flightFromCode}
                    >
                        {initialValues.map((element) => {
                            const { city, country } = element;
                            return (
                                <option key={uuidv1()} value={element.code}>
                                    {`${city}(${element.country})`}
                                </option>
                            )
                        })}
                    </select>

                    To:
                <select
                        onChange={this.handleFlightToChange}
                        value={flightToCode}
                    >
                        {initialValues.map((element) => {
                            const { city, country } = element;
                            return (
                                <option key={uuidv1()} value={element.code}>
                                    {`${city}(${element.country})`}
                                </option>
                            )
                        })}
                    </select>

                    Departure:
                    <input
                        type="date"
                        name="departure"
                        value={departureDate}
                        onChange={this.handleDepartureDateChange}
                    />

                    Return date:
                <input
                        type="date"
                        name="departure"
                        value={returnDate}
                        onChange={this.handleReturnDateChange}
                    />

                    <button
                        type="submit" >
                        Search
                    </button>

                    <button
                        type="reset">
                        reset
                    </button>


                </form>
            </div>
        )
    }
}

