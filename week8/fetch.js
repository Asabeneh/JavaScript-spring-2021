
const container = document.getElementById('container')
const result = document.getElementById('result')
const url = 'https://restcountries.eu/rest/v2/all'

const createCountryUI = ({name, capital, population, flag}) => {
    return (`<div>
    <div>
        <span>${name}</span>
        <span>${capital}</span>
        <span>${population}</span>
    </div>
    <div>
        <img src = '${flag}' />
    </div>
</div>`)
}


let content = ''

fetch(url).then(function(response){
   return response.json()
}).then((countries) => {
    container.textContent = countries.length
    for(const country of countries){
        content +=  createCountryUI(country)
    }
    container.innerHTML = content
}).catch((error) => {
    console.log(error)
})








