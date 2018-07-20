<template>
  <div class="form-group">
    <input type="text" placeholder="Book search" class="form-control" @keydown.enter="search" v-model="input"/>
  </div>
</template>

<script>
export default {

  data: function() {
    return{
      input: ''
    }
  },


  methods: {
    search() {
      this.$store.commit('search', this.input)
      this.$store.dispatch('fetchResults', this.input)
    }
  }
}
</script>