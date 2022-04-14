<template>
<b-container class="mt-4">
  <form>
  <div>
    <h1 class="display-4 font-weight-light">Editar Libro</h1>
    <br>
    <b-form-group
      id="sku"
      description="Ejemplo: XX1ABC"
      label="Ingrese el codigo de barra:"
      label-for="sku"
      valid-feedback="Gracias!"
      label-cols-sm="4"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
    >
      <b-form-input id="sku" v-model="book.sku" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="title"
      description="Titulo del libro"
      label="Ingrese el titulo del libro:"
      label-for="title"
      valid-feedback="Gracias!"
      label-cols-sm="4"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
     
    >
      <b-form-input id="title" v-model="book.title" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="author"
      description="Autor del libro"
      label="Ingrese el autor del libro:"
      label-for="author"
      valid-feedback="Gracias!"
      label-cols-sm="4"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
    >
      <b-form-input id="author" v-model="book.author"  trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="pages"
      description="Cantidad de paginas del libro"
      label="Ingrese la cantidad de paginas:"
      label-for="pages"
      valid-feedback="Gracias!"
      label-cols-sm="4"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
     
    >
      <b-form-input  type="number" id="pages" v-model="book.pages" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="lenguage"
      description="El lenguaje en el cual esta escrito el libro"
      label="Ingrese el idioma del libro:"
      label-for="lenguage"
      valid-feedback="Gracias!"
      label-cols-sm="4"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
    >
      <b-form-input id="lenguage" v-model="book.language" trim></b-form-input>
    </b-form-group>
    <div>
      <b-row>
        <b-col cols="4" class="pb-2">
          <b-button type="button" size="lg" @click="update" variant="outline-success">
            Actualizar
          </b-button>
        </b-col>
        <b-col>
          <b-alert show variant="success" fade v-model="show_success_alert">Libro actualizado correctamente</b-alert>
        </b-col>
      </b-row>
    </div>
  </div>
  </form>
</b-container>
</template>

<script>
export default {
  data() {
    return{
      book:{},
      show_success_alert: false
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
    },
    update: async function(){
      try{
        let book_id = this.$route.params.id;    
        let response = await this.$axios.put("/api/books/"+book_id);
        if (response.status == 200){
          this.show_success_alert = true
        }
      } catch(error){
        console.log(error)
      }
    }
  } 
}
</script>

<style>

</style>