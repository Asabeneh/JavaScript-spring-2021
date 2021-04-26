const container = document.getElementById('container')
const termInput = document.getElementById('term')
console.log(termInput.value)


let filteredCountries = []

const createCountriesUI = (data) => {
for(const country of data){
let div = document.createElement('div')
let divContent = document.createElement('div')
let name = document.createElement('span')
let capital = document.createElement('span')
let population = document.createElement('span')

name.textContent =  country.name
capital.textContent =  country.capital
population.textContent =  country.population

divContent.appendChild(name)
divContent.appendChild(population)
divContent.appendChild(capital)

div.appendChild(divContent)

let divFlag = document.createElement('div')
let flag = document.createElement('img')
flag.src = country.flag
divFlag.appendChild(flag)
div.appendChild(divFlag)

container.appendChild(div)
}
}


createCountriesUI(countriesObj)

termInput.addEventListener('input', (e) => {

    filteredCountries = countriesObj.filter((country) => country.name.toLowerCase().includes(e.target.value.toLowerCase()))

    container.innerHTML = ''
    createCountriesUI(filteredCountries)

})

