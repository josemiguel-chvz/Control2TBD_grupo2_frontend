<template>
  <div>
      Editar debe traer la data en campos de text que se pueden modificar (Similar a create) y luego guardar para generar update,
      también se puede agregar un boton eliminar en Editar
      book: {{book}}
  </div>
</template>

<script>
export default {
  data () {
    return{
      book: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData: async function() {
      try {
				let book_id = this.$route.params.id;
        let response = await this.$axios.get("/api/books/"+book_id);
        this.book = response.data;
      } catch (error) {
        console.log(error)
      }
    }
  } 
}
</script>

<style>

</style>