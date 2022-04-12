<template>
  <div>
    <ul class="item-list">
      <li v-for="(book, index) in books" :key="index">
        {{book.title}} - {{book.author}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      books: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData: async function() {
      try {
        let response = await this.$axios.get("/api/books");
        this.books = response.data;
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>