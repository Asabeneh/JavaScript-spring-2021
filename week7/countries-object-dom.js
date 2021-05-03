const title = document.getElementById('title')
const result  = document.getElementById('result')
title.style.textAlign = 'center'
title.textContent = `The total number of the coutries are ${countriesObj.length}`

const container = document.getElementById('container');
const termInput = document.getElementById('term')

const createContent = ({name, capital, population, flag}) => {
    return ( `<div>
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

const createCountriesUI = (arr) => {
    let content = ''
    for(const country of arr){
        content += createContent(country)
    }
    container.innerHTML = content
}

createCountriesUI(countriesObj)
termInput.addEventListener('input', (e) => {
    filteredCountries = countriesObj.filter(
			({ name, capital, languages}) => {
                console.log(capital)
                return 	name.toLowerCase().includes(e.target.value.toLowerCase()) ||
				capital.toLowerCase().includes(e.target.value.toLowerCase()) ||
                languages.join(',').toLowerCase().includes(e.target.value.toLowerCase());
            }
			
		)
    container.innerHTML = ''
    result.textContent = filteredCountries.length
    createCountriesUI(filteredCountries)
})











