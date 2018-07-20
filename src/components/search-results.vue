<template>
  <div>
    <div v-for="book in $store.state.results" :key="book.id" @click="$store.commit('setActiveBook', book)">
      {{ book.volumeInfo.title }}
    </div>
  </div>
</template>

<script>
export default {

}
</script>