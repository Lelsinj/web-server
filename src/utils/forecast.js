const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dc15663486505a6afbb885301fe91993&query=' + latitude + ',' + longitude 

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain, with a wind speed of ' + body.current.wind_speed + ' Km/h.')
        }
    })
}

module.exports = forecast