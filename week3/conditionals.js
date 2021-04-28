// CONDITOIONS

let a = 5

// Lets write a js script that check if a number is positive, negative or zero

if(a > 0){
   console.log('It is a positive number')
} else if(a == 0) {
    console.log('The number is zero')
} else if( a < 0) {
    console.log('It is a negative number')
}
else {
    console.log('Unknown')
}

// more on if else, switch , ternary


// let weather = prompt('Enter weather: ', 'Enter some text here ..').toLowerCase()

// if(weather == 'rainy'){
//     console.log('Yes, it is raining')
// } else if(weather == 'sunny') {
//     console.log('It is such a shinny day, just go out freely')
// } else if( weather =='foggy'){
//     console.log('It just foggy, gloomy and cloudy day.')
// } else if(weather =='snowy'){
//     console.log('It might be too cold')
// }
//  else {
//     console.log('No one knows about today weather condition')
// }

// SWITCH
// switch (weather) {


//         // the code goes here

//     case 'rainy':
//         console.log('Yes, it is raining')
//         break
//     case 'sunny':
//         console.log('It is such a shinny day, just go out freely')
//         break
//     case 'foggy':
//          console.log('It just foggy, gloomy and cloudy day.')
//          break
//     case 'snowy':
//         console.log('It might be too cold')
//         break
//     default:
//          console.log('No one knows about today weather condition')
// }

// Ternary 

let firstName = 'Eyob'

let value = firstName.length > 5 ? 'Long': 'Short'
console.log()
console.log(value)
