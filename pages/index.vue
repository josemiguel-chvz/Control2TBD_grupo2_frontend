<template>
   <div class="container-sm mt-4">
    <div class="mx-auto" style="width:200px;">
      <h1 class="display-4 font-weight-light">Libros</h1>
    </div>
    <div class="mx-auto mt-4">
      <b-row>
        <b-col v-for="(book, index) in books" :key="index" cols=3>
          <book-card
            :id="book.id"
            :title="book.title"
            :author="book.author"
            :pages="book.pages"
            :language="book.language"
            :sku="book.sku"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import BookCard from '~/components/BookCard.vue';

export default {
  name: 'IndexPage',
  components: { BookCard },
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
