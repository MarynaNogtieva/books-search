<template>
  <div>
    <div vi-if="book">
      <p>{{ book.volumeInfo.title }}</p>
      <img v-bind:src="book.volumeInfo.imageLinks.thumbnail" />
      <p> {{ book.searchInfo.textSnippet }} </p>
      
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    book(){
      return this.$store.state.activeBook;
    }
  }
}
</script>