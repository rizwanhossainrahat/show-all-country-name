
fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countryDiv = document.getElementById('counties');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countriesDiv = document.createElement('div')
        countriesDiv.className = 'country-div';
        // const h3=document.createElement('h3');
        // h3.innerText=country.name.common;
        // const p=document.createElement('p');
        // p.innerText=country.capital;
        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p class="country-capital">${country.capital}</p>
        <button class="button" onclick="displayCountryDetail('${country.name}')"> country details</button>
        `;
        countriesDiv.innerHTML = countryInfo;

        // countriesDiv.appendChild(h3);
        // countriesDiv.appendChild(p);
        countryDiv.appendChild(countriesDiv)
    }
}

// button a click korle details dakhabe 
        const displayCountryDetail=name=>{
        const url=`https://restcountries.com/v3.1/name/${name}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>countryInfo(data[0]))
        }
        const countryInfo=country=>{
           
            const countyDivDetail=document.getElementById('country-details-div');
            countyDivDetail.innerHTML=`
            <h1>${country.name.common}</h1>
            <p>Population: ${country.population}</p>
            <p>Area: ${country.area}</p>
            <img src="${country.flag}"
            `

        }


  


 