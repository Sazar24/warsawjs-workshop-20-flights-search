import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { readAirportListAsync, searchFlightAsync } from './api';
import { SearchForm } from './SearchForm';
import { FlightList } from './FlightList';


class App extends Component {
  state = {
    isLoading: true,
    airports: null,
    searchParams: null,
    flights: null,
  };

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    console.log('isLoading: ', this.state.isLoading);

    try {
      const flightReceived = await readAirportListAsync();
      this.setState({
        airports: flightReceived,
        isLoading: false,
      })
      console.log('isLoading: ', this.state.isLoading);
      console.log('In componentDidMount: flightReceived: ', flightReceived);

    } catch (error) {
      this.setState({
        isLoading: false
      });
      console.warn("api airports fetch failure");
    }

  }

  handleSubmit = async (flightFromCode, flightToCode, departureDate, returnDate) => {
    const flightsFound = await searchFlightAsync({ departureDate, returnDate, flightFromCode, flightToCode });
    console.log('App: handleSubmit: flightsFound: ', flightsFound);
    this.setState({
      flights: flightsFound
    })

  }

  render() {
    const { isLoading, airports, searchParams, flights } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">this is our beauty app for searching flights</h1>
        </header>
        <div>

          {(isLoading) && (
            <div>
              Loading...
          </div>
          )}
          {this.state.isLoading ? "Loading" : ""}

          {isLoading === false && flights === null && (
            <div>
              <SearchForm
                initialValues={airports}
                submit={this.handleSubmit}
              />
            </div>
          )}

          {isLoading === false && flights !== null && (
            <div>
              <FlightList
                flights={flights}
              />
            </div>
          )}



        </div>
      </div>
    );
  }
}

export default App;
