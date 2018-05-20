const ROOT_URL = 'https://warsawjs-flights-api.herokuapp.com';

/// mine, async/await:
export async function readAirportListAsync(){
    const response = await global.fetch(`${ROOT_URL}/airports`);
    // TBD: dlaczego nie window.fetch? 
    return response.json();
    // return response;
}

// oryginal, by trainer:
// export function readAirportList() {
//     return global.fetch(`${ROOT_URL}/airports`)
//         .then(response => response.json());
// }
// window.readAirportList = readAirportList; 


const mock = {flightFromCode: "WAW", flightToCode: "ATL", departureDate: "2018-05-20", returnDate: "2018-05-20"};
// / mine, async/await:

export async function searchFlightAsync(params){

    const { departureDate, returnDate, flightFromCode, flightToCode } = params; 
    try {
        
        const url = `${ROOT_URL}/flights/${flightFromCode}/${flightToCode}/${departureDate}/${returnDate}`;
        const response = await global.fetch(url);
        return response.json();
    } catch (error) {
        console.log('searchFlightAsync error:', error);
           
    }
}

window.readAirportListAsync = readAirportListAsync;  // sprawia, że funkcja jest dostępna z konsoli przeglądarki
window.searchFlightAsync = searchFlightAsync;




///////////////////////
//// oryginal from trainer: /////

// const ROOT_URL = 'https://warsawjs-flights-api.herokuapp.com';

// export function readAirportList() {
//   return global.fetch(`${ROOT_URL}/airports`)
//     .then(response => response.json());
// }

// export function searchFlight(params) {

//   const { departureDate, returnDate, from, to } = params;
//   departureDate = params.departureDate;


//   return global.fetch(`${ROOT_URL}/flights/${departureDate}/${returnDate}/${from}/${to}`)
//     .then(response => response.json());
// }