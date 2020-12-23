const request = require('postman-request');
const chalk = require('chalk');

let weather = (location, callback) => {
    const apiKey = 'f7148752fdfc88d6e132991fb80f949d'
    const url = 'http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + encodeURI(location)

    request({url,json: true}, (err,res,data)=>{
        if(err) {
            callback(chalk.red('No Connection Established.'), undefined)
        }
        else if(data.err) {
            callback(chalk.red('Location Entered is Invalid!!!'), undefined)
        }
        else {
            callback(undefined,{
                temp: data.current.temperature,
                location: data.location.name,
                des: data.current.weather_descriptions[0],    
            });
        }
       
    });
};

module.exports = weather;