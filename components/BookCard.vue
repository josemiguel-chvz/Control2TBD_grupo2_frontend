<template>
  <b-card class="mb-4" img-src="/stock_book.jpeg" img-alt="Image" img-top fluid style="max-width: 15rem;">
    <template #header>
      <h5 class="mb-0">{{title}}</h5>
    </template>
    <b-card-text>
    <ul class="list-unstyled">
      <li>
        Autor: <b>{{author}}</b>
      </li>
      <li>
        Paginas: <b>{{pages}}</b>
      </li>
      <li>
        Idioma: <b>{{language}}</b>
      </li>
      <li >
        <b-button size="sm" style="margin: 0 auto; display: block;width:100px;" class="mt-3" variant="primary" @click="ViewBook(id)">Ver</b-button>
      </li>
    </ul>
  </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    author: String,
    pages: Number,
    language: String,
    sku: String
  },
  methods: {
    ViewBook: function(event) {
      let bookd_id = event;
      this.$router.push({path: `/ver/${bookd_id}`})
    }
  }
}
</script>

<style>

</style>