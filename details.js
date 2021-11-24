let output = document.querySelector('.output')
let dataArray = []
output.innerHTML = ""
const singlepage = () => {
    const urlID = window.location.search;
    fetch('https://restcountries.com/v2/alpha')
        .then(res => res.json())
        .then(data => {
            data.array.forEach(country => {
                output.innerHTML += `
                <div class="boxed country-card cursor-pointer shadow-lg w-60 h-74 rounded-lg">
                <img src="${country.flags.svg}" class="w-60 h-32" alt="">
                <div class="px-6 pb-6">
                <h2 class="country-name font-bold py-4">${country.name.official}</h2>
                    <ul>
                        <li><span class="font-semibold">Population:</span> ${country.population}</li>
                            <li><span class="font-semibold">Region:</span>${country.region}</li> 
                        <li class="search-id"><span class="font-semibold">Capital:</span> ${country.capital}</li> 
                    </ul>
                </div>
            </div>`
            });
        })

    .catch(error => {
        output.innerHTML = `<div class="">${error.message}</div>`
    })
}
singlepage();
const getPosts = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            dataArray = data
            renderPosts(data);
            filterPost()
        })
        .catch(error => {
            output.innerHTML = `<div>${error.message}</div>`
        })
}
getPosts()

const renderPosts = (post) => {
    let output = post.map((country) => {
            return `
        <div class="boxed country-card cursor-pointer shadow-lg w-60 h-74 rounded-lg">
        <a href="details.html?capital=${country.capital}">
        <img src="${country.flags.svg}" class="w-60 h-32" alt="">
        <div class="px-6 pb-6">
        <h2 class="search-title font-bold py-4">${country.name.official}</h2>
            <ul>
                <li><span class="font-semibold">Population:</span> ${country.population}</li>
                    <li><span class="font-semibold">Region:</span>${country.region}</li> 
                <li class="search-id"><span class="font-semibold">Capital:</span> ${country.capital}</li> 
            </ul>
        </div>
        </a>
    </div>
        `
        })
        .join('')
    document.querySelector(".output").innerHTML = output
}

let alertplaceholder = document.getElementById('liveAlertPlaceholder')

function alerts(message) {
    let wrapper = document.createElement('div')
    wrapper.innerHTML = `<div class="">'+ message +'<button class="btn btn-primary"></button></div>`
    alertplaceholder.append(wrapper)
}
const filterPost = () => {
    let search = document.getElementById('search-box')
    let searchHide = document.querySelectorAll('.boxed')
    search.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase()
        searchHide.forEach((item) => {
            let title = item.querySelector('.search-title').innerText;
            let id = item.querySelector('.search-id').innerText;
            if (title.toLowerCase().indexOf(term) != -1 || id.indexOf(term)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
}