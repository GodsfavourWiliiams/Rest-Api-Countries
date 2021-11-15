document.querySelector('.dark').addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('active');
    document.querySelector('input').classList.toggle('navActive');
    document.querySelector('.nav').classList.toggle('navActive');
    document.querySelector('.header').classList.toggle('navActive');
});

fetch('https://restcountries.com/v2/all')
    .then((res) => res.json())
    .then((data) => {
        let output = ''
        data.forEach(function(country) {
            output += `
        <div>
            <img src="${country.flag}" alt="">
              <h3>${country.name}</h3> 
                <ul>
                    <li>Population: ${country.population}</li>
                        <li>Region: ${country.region}</li> 
                    <li>Capital: ${country.capital}</li> 
                </ul>
        </div>`
        });
        document.getElementById("output").innerHTML = output
    })