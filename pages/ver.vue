<template>
  <div>
      
      Nombre libro: {{book.title}}
  </div>
</template>

<script>
export default {
  props: {
    book_id: Number
  },
  data() {
    return {
      book: {
        "id": 1,
        "sku": "XXX789",
        "title": "Juego de tronos",
        "author": "Stephen Kingo",
        "pages": 3100,
        "language": "Español",
        "created_at": "2022-04-12 14:15:43.724209",
        "updated_at": null,
        "deleted_at": null,
        "is_deleted": false
      }
    }
  }
}
</script>

<style>

</style>