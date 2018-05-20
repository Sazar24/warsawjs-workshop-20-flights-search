import React, { Component } from 'react';
import './flightList.css';
import uuidv1 from 'uuid/v1';

export
    class FlightList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { flights } = this.props;
        console.log('flights:', flights);

        return (
            <div>
                {flights.map(element => {
                    return (
                        <div
                            className="flightListItem"
                            key={uuidv1()}
                        >
                            id: {element.id} <br />
                            price: {element.price} <br />
                             {element.inboundDate} <br />
                             {element.outboundDate}<br />
                        </div>
                    )
                })

                }
            </div>
        )
    }


}