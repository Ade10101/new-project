const inputEl = document.querySelector(`#input`)
const btnEl = document.querySelector(`#btn`)
const countrynEl =document.querySelector(`#countryn`)
const coaEl = document.querySelector(`#coa`)
const mapEl = document.querySelector(`#map`)
const flagEl = document.querySelector(`#flag`)
const currencyEl = document.querySelector(`#currency`)

async function getCountry(country) {
    const one = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await one.json()
    console.log(data[0].name.official)
    flagEl.setAttribute(`src`, data[0].flags.png)
    coaEl.setAttribute(`src`, data[0].coatOfArms.png)
    mapEl.setAttribute(`href`, data[0].maps.googleMaps)
    countrynEl.textContent=data[0].name.official
    currencyEl.textContent=data[0].flags.alt
    console.log(data[0].maps.googleMaps)
    console.log(data[0].coatOfArms.png)
    console.log(data[0].flags.alt)
    console.log(data[0].flags.png)
}

btnEl.addEventListener(`click`,function(){
    console.log(inputEl.value)
    getCountry(inputEl.value)
})
