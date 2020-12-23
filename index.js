const chalk = require('chalk');
const weather = require('./func.js');
const location = process.argv[2] //# Taking Input from the command line

if (location === undefined) //! chacking if the Location is entered
{
    console.log(chalk.red('Enter the Location: ')); //**Prompt to Enter the Location */
}
else{
    weather(location, (err,{location,temp,des}) =>{
        if (err !== undefined){
            console.log(err);
        }
        else {
            console.log('Location: '+location);
            console.log('Temperature: '+temp);
            console.log('Description: '+des);
        }
    })
}

