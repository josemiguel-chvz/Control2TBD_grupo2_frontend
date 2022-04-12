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
      <li>
        <h6 class="mt-3 small">SKU: {{sku}}</h6>
      </li>
    </ul>
  </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    pages: Number,
    language: String,
    sku: String
  }
}
</script>

<style>

</style>