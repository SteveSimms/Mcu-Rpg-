<!-- eslint-disable no-console -->
<script setup>
const { data } = await useFetch('/api/character')

console.log(data)
</script>

<template>
  <div>
    <div>
      <p>name: {{ data.name }}</p>
      <p> hitpoints: {{ data.hitPoints }}</p>
      <p>strength: {{ data.strength }}</p>
      <p> defense: {{ data.defense }}</p>
      <p>intellegence:{{ data.intelligence }}</p>

      <NuxtImg :src="data.imageUrl" :alt="data.name" />
    </div>
  </div>
</template>

<style scoped>

</style>
