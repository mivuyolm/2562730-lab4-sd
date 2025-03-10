const myCountry = document.getElementById('countryName')
const myCapital = document.getElementById('capital')
const myPopulation = document.getElementById('population')
const myRegion = document.getElementById('region')
const myFlag = document.getElementById('flag')
const myButton = document.getElementById('button1')

myButton.addEventListener('click', function() {
    const cName = myCountry.value.trim();
    if (!cName) return;

    const sUrl = `https://restcountries.com/v3.1/name/${cName}?fullText=true`;
    fetch(sUrl)
        .then(response => {
            if (!response.ok) throw new Error('Country not found');
            return response.json();
        })
        .then(r => {
        
        
            myCapital.innerText = "Capital: " +r[0].capital[0];
            myPopulation.innerText = "Population: " +r[0].population;
            myRegion.innerText ="Region: " + r[0].region;
            myFlag.src = r[0].flags.svg;
    

        })
});