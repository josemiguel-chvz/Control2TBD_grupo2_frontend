<template>
  <div class="container-sm mt-4">
     <div class="mx-auto" style="width:200px;">
      <h1 class="display-4 font-weight-light">Libros</h1>
    </div>
    <div>
      <b-table head-variant="dark" bordered hover :items="books" :fields="fields">
        <template #cell(settings)>
          <b-button size="sm"  variant="primary"  :href="'/ver/'+1">Ver</b-button>
          <b-button size="sm"  variant="danger">Eliminar</b-button>
        </template>
      </b-table>    
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      books: [],
      fields: [
        {
          key: 'id',
          label: '#'
        },
        {
          key: 'sku',
          label: 'sku'
        },
        {
          key: 'title',
          label: 'Nombre'
        },
        {
          key: 'author',
          label: 'Autor'
        },
        {
          key: 'pages',
          label: 'Páginas'
        },
        {
          key: 'language',
          label: 'Idioma'
        },
        {
          key: 'settings',
          label: 'Configuración'
        } 
      ]
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