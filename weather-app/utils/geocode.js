const request = require ('request')
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRyaWFubmg5OSIsImEiOiJjbGR6N3h5bmIwZ2hxM3BqemliNDBkemx1In0.fz0d26iOWCzRP92TI-S-mg'
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                callback('Unable to connect to location services!', undefined)
            } else if (response.body.features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                callback(undefined, {
                    latitude: response.body.features[0].center[0],
                    longitude: response.body.features[0].center[1],
                    location: response.body.features[0].place_name
                })
            }
        })
    }
    
    module.exports = geocode
