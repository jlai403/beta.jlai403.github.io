<template>
  <div id="about" style="min-height: 100vh">
    <div class="container">
      <div class="intro row">
        <div class="hello">Hello, my name is</div>
        <div class="name">Joey Lai</div>
        <div class="title">and I build products</div>
      </div>

      <div class="bio row">
        <p>
          Good {{ state.currentTimeOfDay }}, <br/><br/>
          {{ state.weatherText }} in {{ state.city }}, {{ state.state }}
        </p>
      </div>

      <div class="row">
        <a href="#skills">
          <div class="bouncing learn-more">
            Learn More <br/>
            <i class="fa fa-chevron-down"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import './About.scss'

async function getGeoData() {
  let response = await fetch('https://geolocation-db.com/json/')
  return await response.json()
}

async function getWeatherData(lat: number, long: number) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6961a843d1a2d12f6cc9f4668124a762`)
  return await response.json()
}

function getWeatherText(weatherCode: number | string) {
  switch (weatherCode.toString()[0]) {
    case '2':
      return `Looks like there's thunderstorms currently`
    case '3':
      return `Looks like there's some drizzlies currently`
    case '5':
      return `Looks like it's raining currently`
    case '6':
      return `Looks like it's snowing currently`
    case '7':
      return `Its clear skies currently`
    case '8':
      return `Its currently cloudy`
    default:
      return 'Hi'
  }
}

const state = reactive({
  currentTimeOfDay: '',
  yearsExperience: 0,
  vistorCountry: '',
  vistorState: '',
  vistorCity: '',
  visitorPostal: '',
  vistorLat: 0,
  vistorLong: 0,
  weatherText: '',
  city: '',
  state: ''
})

onMounted(async () => {
  let currentTime = new Date()
  let geoData = await getGeoData()
  let weatherData = await getWeatherData(geoData.latitude, geoData.longitude)

  state.currentTimeOfDay = currentTime.getHours() < 12 ? 'Morning' : currentTime.getHours() < 16 ? 'Afternoon' : currentTime.getHours() < 20 ? 'Evening' : 'Night'
  state.yearsExperience = currentTime.getFullYear() - 2011
  state.vistorCountry = geoData.country
  state.vistorState = geoData.state
  state.vistorCity = geoData.city
  state.visitorPostal = geoData.postal
  state.vistorLat = geoData.latitude
  state.vistorLong = geoData.longitude
  state.weatherText = getWeatherText(weatherData.weather[0].id)
  state.city = geoData.city
  state.state = geoData.state
})
</script>
