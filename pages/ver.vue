<template>

  <div class="mx-auto" style="width:200px;">
    <h1 class="display-5 font-weight-light">Descripcion</h1>
    <b-img src="https://st2.depositphotos.com/2885805/43183/v/450/depositphotos_431838008-stock-illustration-lying-black-book-composition.jpg" fluid thumbnail></b-img>
    <br>    
    
    <p>
    Titulo: {{book.title}}
    <br>
    Autor: {{book.author}}
    <br>
    Fecha creación: {{book.created_at}}
    <br>
    Idioma: {{book.languaje}}
    <br>
    ID: {{book.id}}
    <br>
    Sku: {{book.sku}}
    <br>
    Paginas: {{book.pages}}
    </p>

    <b-button v-b-toggle.sidebar-variant>Ver mas</b-button>
    <b-sidebar id="sidebar-variant" title="Descripción" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Libro desarrollado por {{book.author}} en {{book.created_at}} bajo el titulo de {{book.title}}, escrito inicialmente en {{book.language}} en su tierra natal.
          En la plataforma se representa bajo la id={{book.id}} con un Sku={{book.sku}}
        </p>
        <b-img src="https://s1.eestatic.com/2019/07/01/como/libros-estudiantes-universidad_410470522_127023887_1706x960.jpg" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
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
        let response = await this.$axios.get("/api/books/1/");
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