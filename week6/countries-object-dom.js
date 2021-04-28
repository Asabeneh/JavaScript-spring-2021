const container = document.getElementById('container')
const termInput = document.getElementById('term')

const createContent = (arr) => {
    return ( `<div>
<div>
    <span>${arr.name}</span>
    <span>${arr.capital}</span>
    <span>${arr.population}</span>
</div>
<div>
    <img src = '${arr.flag}' />
</div>
</div>`)

}

const createCountriesUI = (arr) => {
    let content = ''
    for(const country of arr){
        content += createContent(country)
    }
    console.log(content)
    container.innerHTML = content
}

createCountriesUI(countriesObj)
termInput.addEventListener('input', (e) => {
    filteredCountries = countriesObj.filter((country) => country.name.toLowerCase().includes(e.target.value.toLowerCase()))
    container.innerHTML = ''
    createCountriesUI(filteredCountries)
})











