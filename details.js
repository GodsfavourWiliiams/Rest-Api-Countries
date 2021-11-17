fetch('https://restcountries.com/v2/alpha')
    .then((res) => res.json())
    .then((data) => {
        let outputs = ''
        data.forEach(function(country) {
            outputs += `
        <div class="boxed shadow-lg w-60 h-74 rounded-lg">
            <img src="${country.flag}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
            <a href="details.html"><h2 class="font-bold py-4">${country.name}</h2> </a>
                <ul>
                    <li><span class="font-semibold">Population:</span> ${country.population}</li>
                        <li><span class="font-semibold">Region:</span>${country.region}</li> 
                    <li><span class="font-semibold">Capital:</span> ${country.capital}</li> 
                </ul>
            </div>
        </div>`
        });
        document.querySelector(".outputs").innerHTML = outputs
    });