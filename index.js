const body = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const toggleBackgroundButton = document.querySelector('.toggle-background')
const weather = document.querySelector('.weather')
const elements = [header, footer]




function changeColor() {
    if (body.classList.contains('background-white')) {
        body.classList.remove('background-white')
        body.classList.add('background-dark')
        elements.forEach(element => {
            element.classList.remove('background-blue')
            element.classList.add('background-yellow')
        })
    } else {
        body.classList.remove('background-dark')
        body.classList.add('background-white')
        elements.forEach(element => {
            element.classList.remove('background-yellow')
            element.classList.add('background-blue')
        })
    }
}
toggleBackgroundButton.addEventListener('click', changeColor)

fetch('http://api.openweathermap.org/data/2.5/weather?q=Szczecin&units=metric&appid=157e8833109c8852ca45a37f185a68f8')
.then(response => response.json())
.then(data => {
weather.innerHTML = `Weather in ${data.name}, ${data.sys.country} of ${new Date().toLocaleDateString()}: <div class="weather-conditions"><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="current weather icon"></div>
<span>Temperature: ${data.main.temp}&#8451;</span><br><span> pressure: ${data.main.pressure}kPa</span>`
})


