<template>
<b-container class="mt-4">
  <form>
  <div>
    <h1 class="display-4 font-weight-light">Crear Libro</h1>
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
      :invalid-feedback="invalidFeedback1"
      :state="state1"
    >
      <b-form-input id="sku" v-model="newBook.sku" :state="state1" trim></b-form-input>
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
      :invalid-feedback="invalidFeedback2"
      :state="state2"
    >
      <b-form-input id="title" v-model="newBook.title" :state="state2" trim></b-form-input>
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
      :invalid-feedback="invalidFeedback3"
      :state="state3"
    >
      <b-form-input id="author" v-model="newBook.author" :state="state3" trim></b-form-input>
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
      :invalid-feedback="invalidFeedback4"
      :state="state4"
    >
      <b-form-input  type="number" id="pages" v-model="newBook.pages" :state="state4" trim></b-form-input>
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
      :invalid-feedback="invalidFeedback5"
      :state="state5"
    >
      <b-form-input id="lenguage" v-model="newBook.language" :state="state5" trim></b-form-input>
    </b-form-group>
    <div>
      <b-row>
        <b-col cols="4" class="pb-2">
          <b-button type="button" size="lg" @click="send" variant="outline-success">
            Crear
          </b-button>
        </b-col>
        <b-col>
          <b-alert show variant="success" fade v-model="show_success_alert">Libro creado correctamente</b-alert>
        </b-col>
      </b-row>
    </div>
  </div>
  </form>
</b-container>
</template>

<script>
  export default {
     
    computed: {
      state1() {
        return (this.newBook.sku.length >= 6)
      },
      state2() {
        return (this.newBook.title.length >= 2)
      },
      state3() {
        return (this.newBook.author.length >= 2)
      },
      state4() { 
        return (this.newBook.pages >= 2)
      },
      state5() {
        return (this.newBook.language.length >= 3)
      },
    
      
      invalidFeedback1() {
        if (this.newBook.sku.length > 0) {
          return 'Ingrese al menos 6 caracteres.'
        }
        return 'Por favor, rellene el campo'
      },
      invalidFeedback2() {
        if (this.newBook.title.length > 0) {
          return 'Ingrese al menos 2 caracteres'
        }
        return 'Por favor, rellene el campo'
      },
      invalidFeedback3() {
        if (this.newBook.author.length > 0) {
          return 'Ingrese al menos 2 caracteres'
        }
        return 'Por favor, rellene el campo'
      },
      invalidFeedback4() {
        if (this.newBook.pages == null) {
          return 'No puede tener menos de 2 paginas'
        }
        return 'Por favor, rellene el campo'
      },
      invalidFeedback5() {
        if (this.newBook.language.length > 0) {
          return 'Ingrese al menos 3 caracteres'
        }
        return 'Por favor, rellene el campo'
      }
      
    },
    data(){
      return {
          show_success_alert: false,
          newBook:{
            sku: "",
            title: "",
            author: "",
            pages: 0,
            language: "" 
          }
        }
    },
    methods:{
      send:async function(){
        try {
          console.log(this.newBook)
          let response = await this.$axios.post("/api/books",this.newBook);
          if (response.status == 201) {
            this.show_success_alert = true;
          }
          } catch (error) {

              console.log("error", error)
          }
        },
         
      }
  }
</script>

<style>

</style>