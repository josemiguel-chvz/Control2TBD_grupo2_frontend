<template>
<b-container>
  <form>
  <div>
    CREAR LIBRO
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
      :state="state"
    >
      <b-form-input id="sku" v-model="sku" :state="state1" trim></b-form-input>
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
      :state="state"
    >
      <b-form-input id="title" v-model="title" :state="state2" trim></b-form-input>
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
      :state="state"
    >
      <b-form-input id="author" v-model="author" :state="state3" trim></b-form-input>
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
      :state="state"
    >
      <b-form-input id="pages" type="number" v-model="pages" :state="state4" trim></b-form-input>
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
      :state="state"
    >
      <b-form-input id="lenguage" v-model="lenguage" :state="state5" trim></b-form-input>
    </b-form-group>
    <div>
      <b-row>
        <b-col lg="4" class="pb-2">
        <b-button type="button" size="lg" @click="send" variant="outline-success">
        Crear
        </b-button>
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
        return (this.sku.length >= 6)
      },
      state2() {
        return (this.title.length >= 2)
      },
      state3() {
        return (this.author.length >= 2)
      },
      state4() {
        return (this.pages >= 2)
      },
      state5() {
        return (this.lenguage.length >= 3)
      },
      invalidFeedback1() {
        if (this.sku.length > 0) {
          return 'Ingrese al menos 6 caracteres.'
        }
      
        return 'Por favor, rellene el campo'
      },
      invalidFeedback2() {
        if (this.title.length > 0) {
          return 'Ingrese al menos 2 caracteres'
        }
      
        return 'Por favor, rellene el campo'
      },
      invalidFeedback3() {
        if (this.author.length > 0) {
          return 'Ingrese al menos 2 caracteres'
        }
      
        return 'Por favor, rellene el campo'
      },
      invalidFeedback4() {
        if (this.pages != null) {
          return 'No puede tener menos de 2 paginas'
        }
      
        return 'Por favor, rellene el campo'
      },
      invalidFeedback5() {
        if (this.lenguage.length > 0) {
          return 'Ingrese al menos 3 caracteres'
        }
      
        return 'Por favor, rellene el campo'
      }
      
    },
    data() {
      return {
        newBook:{},
        sku: '',
        title: '',
        author: '',
        pages: '', 
        lenguage: ''
      }
    },
    methods:{
      send:async function(){
        try {
          var result = await this.$axios.post("/api/books",this.newBook);
          let book = result.data;
          //mensaje de éxito
          //...
          } catch (error) {
          //mensaje de error
          console.log("error", error)
          }
        } 
      }
  }
</script>

<style>

</style>