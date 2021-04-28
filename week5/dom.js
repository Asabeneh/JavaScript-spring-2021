const container = document.getElementById('container')


for(const country of countriesObj){

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

