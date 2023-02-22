// const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]


if (!address) {
        console.log('Please provide an address')
    } else {
        geocode(address, (error, { latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)

        })
    })
}

   







































































// const url = 'http://api.weatherstack.com/current?access_key=ef0632a572d602c5c18450d564dcde66&query=37.8267,-122.43'

// request({url: url, json: true }, (error, response) => {
//     request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })
    
//     // console.log(response.body.current)

// })

// geo coding
// address -> lat/long -> weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/california.json?access_token=pk.eyJ1Ijoidml2Ymxha2VuZXkiLCJhIjoiY2xlM3FhOXRiMDIwbDNuamwybHF3NmRneSJ9.2rXmz852DvAT7hZkANF_bQ&limit=1'


// request({ url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('unable to connect to locaton services!')
//     } else if (response.body.features.length ===0 ){
//         console.log('unable to find locaton try another search')
//     } else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)

//     }
   
// })


// const geocode = (address, callback) => {
//     const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoidml2Ymxha2VuZXkiLCJhIjoiY2xlM3FhOXRiMDIwbDNuamwybHF3NmRneSJ9.2rXmz852DvAT7hZkANF_bQ&limit=1'
    
//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('unable to connect to location sevices', undefined)
//         } else if (response.body.features.length === 0) {

//         }else{

//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// const geocode = (address, callback) => {
//     const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoidml2Ymxha2VuZXkiLCJhIjoiY2xlM3FhOXRiMDIwbDNuamwybHF3NmRneSJ9.2rXmz852DvAT7hZkANF_bQ&limit=1'
//     request({ url: url, json: true }, (error, response) => {
//              if (error) {
//                 callback('unable to connect to location sevices', undefined)
//               } else if (response.body.features.length === 0) {
        
//            } else{
        
//                   callback(undefined, {
//                    latitude: response.body.features[0].center[0],
//                    longitude: response.body.features[0].center[1],
//                       location: response.body.features[0].place_name
//                    })
//              }
//           })
//         }











// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const address = process.argv[2]

// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, data) => {
//         if (error) {
//             return console.log(error)
//         }

//         forecast(data.latitude, data.longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }

//             console.log(data.location)
//             console.log(forecastData)
//         })
//     })
// }



// const url = 'https://api.weatherstack.com/current?access_key=ef0632a572d602c5c18450d564dcde66&query=37.8267,-122.4233&units=f'


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
