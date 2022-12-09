<template>
  <NList hoverable clickable>
    <NListItem v-for="(item, index) of posts" :key="index">
      {{ item.title }}
    </NListItem>
  </NList>
</template>

<script setup lang="ts">
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await response.json()
}
const posts = await fetchData()
</script>
