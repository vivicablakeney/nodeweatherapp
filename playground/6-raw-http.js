const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=ef0632a572d602c5c18450d564dcde66&query=37.8267,-122.4233&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()