<template>
  <div class="container">
    <div class="search-box">
      <input type="text" placeholder="Enter your location" v-model="city" class="search-bar" @keyup.enter="handleInput"/>
      <button class="search-btn" v-on:click="handleInput">
        <i class="ri-search-line"></i>
      </button>
    </div>

    <div v-if="weatherData" class="weather-box">
      <img src=" " alt="weather">
      <div>
        {{ weatherData.weather[0].temp }} : {{ weatherData.weather[0].description }}
      </div>
    </div>
    <div class="not-found" v-if="isNotFound">
        <img src="@/assets/images/404.png" alt="404">
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useMutation } from 'vue-query'
import { ref } from 'vue'

const city = ref('')
const isNotFound = ref(false)
const API_KEY = '72e72f6fe76e93fe2b0851a1c8865614'

const { mutate: getWeather, data: weatherData } = useMutation(['getWeather', city.value], async () => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}`)
    const result = await response.data
    return result
  } catch (err) {
    console.log('err', err)
  }
}, {
  onSuccess: (data) => {
    console.log('data', data)
    const container = document.querySelector('.container')
    const image = document.querySelector('.weather-box img')

    if (!data) {
      container.style.height = '400px'
      isNotFound.value = true
    } else {
      container.style.height = '400px'
      isNotFound.value = false

      switch (data.weather[0].main) {
        case 'Clear':
          image.src = '@/assets/images/clear.png'
          break

        case 'Rain':
          image.src = '@/assets/images/rain.png'
          break

        case 'Snow':
          image.src = '@/assets/images/snow.png'
          break

        case 'Clouds':
          image.src = '@/assets/images/cloud.png'
          break

        case 'Haze':
          image.src = '@/assets/images/mist.png'
          break

        default:
          image.src = ''
      }
    }
  }
})

const handleInput = () => {
  getWeather()
}
// console.log(weatherData)

</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 400px;
  /* height: 105px; */
  background: #fff;
  padding: 28px 32px;
  overflow: hidden;
  border-radius: 18px;
  transition: 0.6s ease-out;
  border: 1px solid cyan;
}

.search-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
}
.search-bar {
  color: #06283D;
  width: 80%;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  padding-left: 32px;
}

.search-bar::placeholder {
  font-size: 20px;
  font-weight: 500;
  color : #06283D;
  text-transform: capitalize;
}

.search-btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: white;
  background : linear-gradient(to right, #62EAC6, #32CEE6);
  border-radius: 50%;
  font-size: 22px;
  transition: 0.4s ease;
  border: none;
}

</style>
