document.querySelector('.dark').addEventListener('click', function() {
    document.querySelector('.body').classList.toggle('active');
    document.querySelector('.input').classList.toggle('navActive');
    document.querySelector('.select').classList.toggle('navActive');
    document.querySelector('.nav').classList.toggle('navActive');
    document.querySelector('.boxed').classList.toggle('navActive');
    document.querySelector('.header').classList.toggle('navActive');
});

fetch('https://restcountries.com/v2/all')
    .then((res) => res.json())
    .then((data) => {
        let output = ''
        data.forEach(function(country) {
            output += `
        <div class="boxed shadow-lg w-60 h-80 rounded-lg">
            <img src="${country.flag}" class="w-60" alt="">
            <div class="p-4">
              <h3>${country.name}</h3> 
                <ul>
                    <li>Population: ${country.population}</li>
                        <li>Region: ${country.region}</li> 
                    <li>Capital: ${country.capital}</li> 
                </ul>
            </div>
        </div>`
        });
        document.querySelector(".output").innerHTML = output
    });

document.getElementById('select').addEventListener("change", function() {
    if (this.value == "Africa") {
        fetch('https://restcountries.com/v3.1/region/africa')
            .then((res) => res.json())
            .then((data) => {
                let output = ''
                data.forEach(function(country) {
                    output += `
        <div class="boxed shadow-lg w-60 h-80 rounded-lg">
            <img src="${country.flag}" class="w-60" alt="">
            <div class="p-4">
              <h3>${country.name}</h3> 
                <ul>
                    <li>Population: ${country.population}</li>
                        <li>Region: ${country.region}</li> 
                    <li>Capital: ${country.capital}</li> 
                </ul>
            </div>
        </div>`
                });
                document.querySelector(".output").innerHTML = output
            });
    }
});
document.getElementById('select').addEventListener("change", function() {
    if (this.value == "America") {
        fetch('https://restcountries.com/v3.1/region/america')
            .then((res) => res.json())
            .then((data) => {
                let output = ''
                data.forEach(function(country) {
                    output += `
        <div class="boxed shadow-lg w-60 h-80 rounded-lg">
            <img src="${country.flag}" class="w-60" alt="">
            <div class="p-4">
              <h3>${country.name}</h3> 
                <ul>
                    <li>Population: ${country.population}</li>
                        <li>Region: ${country.region}</li> 
                    <li>Capital: ${country.capital}</li> 
                </ul>
            </div>
        </div>`
                });
                document.querySelector(".output").innerHTML = output
            });
    }
});
document.getElementById('select').addEventListener("change", function() {
    if (this.value == "Asia") {
        fetch('https://restcountries.com/v3.1/region/asia')
            .then((res) => res.json())
            .then((data) => {
                let output = ''
                data.forEach(function(country) {
                    output += `
        <div class="boxed shadow-lg w-60 h-80 rounded-lg">
            <img src="${country.flag}" class="w-60" alt="">
            <div class="p-4">
              <h3>${country.name}</h3> 
                <ul>
                    <li>Population: ${country.population}</li>
                        <li>Region: ${country.region}</li> 
                    <li>Capital: ${country.capital}</li> 
                </ul>
            </div>
        </div>`
                });
                document.querySelector(".output").innerHTML = output
            });
    }
});
document.getElementById('select').addEventListener("change", function() {
    if (this.value == "Europe") {
        fetch('https://restcountries.com/v3.1/region/europe')
            .then((res) => res.json())
            .then((data) => {
                let output = ''
                data.forEach(function(country) {
                    output += `
        <div class="boxed shadow-lg w-60 h-80 rounded-lg">
            <img src="${country.flag}" class="w-60" alt="">
            <div class="p-4">
              <h3>${country.name}</h3> 
                <ul>
                    <li>Population: ${country.population}</li>
                        <li>Region: ${country.region}</li> 
                    <li>Capital: ${country.capital}</li> 
                </ul>
            </div>
        </div>`
                });
                document.querySelector(".output").innerHTML = output
            });
    }
});
document.getElementById('select').addEventListener("change", function() {
    if (this.value == "Oceania") {
        fetch('https://restcountries.com/v3.1/region/oceania')
            .then((res) => res.json())
            .then((data) => {
                let output = ''
                data.forEach(function(country) {
                    output += `
        <div class="boxed shadow-lg w-60 h-80 rounded-lg">
            <img src="${country.flag}" class="w-60" alt="">
            <div class="p-4">
              <h3>${country.name}</h3> 
                <ul>
                    <li>Population: ${country.population}</li>
                        <li>Region: ${country.region}</li> 
                    <li>Capital: ${country.capital}</li> 
                </ul>
            </div>
        </div>`
                });
                document.querySelector(".output").innerHTML = output
            });
    }
});