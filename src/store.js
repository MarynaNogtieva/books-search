export default {
  strict: true,

  state: {
    input: '',
    results: [],
    activeBook: null
  },

  mutations: {
    search(state, input) {
      state.input = input;
    },
    setResults(state, results) {
      state.results = results;
    },
    setActiveBook(state, book) {
      state.activeBook = book;
    }
  },

  actions: {
    fetchResults(store, query) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(res => res.json())
        .then(data => store.commit('setResults', data.items) )
    }
  }
}