<template>
    <div v-if="weatherData">
        {{ weatherData.name }} : {{ weatherData.weather[0].description }}
    </div>
</template>

<script setup>
import { useQuery } from 'vue-query'
import axios from 'axios'

const { data: weatherData } = useQuery('weather', async () => {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: 37.5666791,
      lon: 126.9782914,
      appid: '72e72f6fe76e93fe2b0851a1c8865614',
      lang: 'kr',
      units: 'metric'
    }
  })

  const result = await response.data
  return result
})

</script>
