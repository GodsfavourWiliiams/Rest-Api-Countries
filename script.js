document.querySelector('.dark').addEventListener('click', function() {
    document.querySelector('.body').classList.toggle('active');
    document.querySelector('.input').classList.toggle('navActive');
    document.querySelector('.select').classList.toggle('navActive');
    document.querySelector('.nav').classList.toggle('navActive');
    document.querySelector('.boxed').classList.toggle('navActive');
    document.querySelector('.header').classList.toggle('navActive');
});

fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
        let output = ''
        data.forEach(function(country) {
            output += `
        <div class="boxed country-card cursor-pointer shadow-lg w-60 h-74 rounded-lg" onclick="name()">
            <img src="${country.flags.svg}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
            <h2 class="country-name font-bold py-4">${country.name.official}</h2>
                <ul>
                    <li><span class="font-semibold">Population:</span> ${country.population}</li>
                        <li><span class="font-semibold">Region:</span>${country.region}</li> 
                    <li><span class="font-semibold">Capital:</span> ${country.capital}</li> 
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
                data.forEach(function(africa) {
                    output += `
        <div class="boxed shadow-lg w-60 h-80 rounded-lg">
            <img src="${africa.flags.png}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
              <h2 class="font-bold py-4">${africa.name.official}</h2> 
                <ul>
                    <li><span class="font-semibold">Population:</span> ${africa.population}</li>
                        <li><span class="font-semibold">Region:</span> ${africa.region}</li> 
                    <li><span class="font-semibold">Capital:</span> ${africa.capital}</li> 
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
            <img src="${country.flags.png}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
              <h2 class="font-bold py-4">${country.name.official}</h2> 
                <ul>
                    <li><span class="font-semibold">Population:</span> ${country.population}</li>
                        <li><span class="font-semibold">Region:</span> ${country.region}</li> 
                    <li><span class="font-semibold">Capital:</span> ${country.capital}</li> 
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
            <img src="${country.flags.png}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
              <h2 class="font-bold py-4">${country.name.official}</h2> 
                <ul>
                    <li><span class="font-semibold">Population:</span> ${country.population}</li>
                        <li><span class="font-semibold">Region:</span> ${country.region}</li> 
                    <li><span class="font-semibold">Capital:</span> ${country.capital}</li> 
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
            <img src="${country.flags.png}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
            <h2 class="font-bold py-4">${country.name.official}</h2> 
              <ul>
                  <li><span class="font-semibold">Population:</span> ${country.population}</li>
                      <li><span class="font-semibold">Region:</span> ${country.region}</li> 
                  <li><span class="font-semibold">Capital:</span> ${country.capital}</li> 
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
            <img src="${country.flags.png}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
            <h2 class="font-bold py-4">${country.name.official}</h2> 
              <ul>
                  <li class="list"><span class="font-semibold">Population:</span> ${country.population}</li>
                      <li><span class="font-semibold">Region:</span> ${country.region}</li> 
                  <li><span class="font-semibold">Capital:</span> ${country.capital}</li> 
              </ul>
          </div>
        </div>`
                });
                document.querySelector(".output").innerHTML = output
            });
    }
});
document.getElementById('input').addEventListener("keyup", function() {
    fetch('https://restcountries.com/v2/all')
        .then((res) => res.json())
        .then((data) => {
            let input = document.getElementById('input')
            inputVal = input.value
            data.forEach(function(country) {
                scvc
            });
        });
});
document.querySelector('.boxed').addEventListener('click', function() {
    fetch('https://restcountries.com/v2/all')
        .then((res) => res.json())
        .then((data) => {
            let output = ''
            data.forEach(function(country) {
                output += `
        <div class="boxed shadow-lg w-60 h-74 rounded-lg">
        <a href="details.html">country</a>
            <img src="${country.flag}" class="w-60 h-32" alt="">
            <div class="px-6 pb-6">
              <h2 class="font-bold py-4">${country.name}</h2> 
                <ul>
                    <li><span class="font-semibold">Population:</span> ${country.population}</li>
                        <li><span class="font-semibold">Region:</span>${country.region}</li> 
                    <li><span class="font-semibold">Capital:</span> ${country.capital}</li> 
                </ul>
            </div>
        </div>`
            });
            document.querySelector(".output").innerHTML = output
        });
});
// const searchInput = document.querySelector(".input");
// // search input
// searchInput.addEventListener("keyup", (e) => {
//     const { value } = e.target;

//     // console.log(countryCard)
//     const countryName = document.querySelectorAll(".country-name");
//     console.log(countryName)

//     countryName.forEach((name) => {
//         if (name.textContent.toLowerCase().includes(value.toLowerCase())) {
//             name.closest(".country-card").style.display = "block";
//             alert('f')
//         } else {
//             name.closest(".country-card").style.display = "none";
//         }
//     });
// });