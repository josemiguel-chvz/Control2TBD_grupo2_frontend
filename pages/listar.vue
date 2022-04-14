<template>
  <div class="container-sm mt-4">
    <div class="mx-auto" style="width:200px;">
      <h1 class="display-4 font-weight-light">Libros</h1>
    </div>
    <div>
      <b-table head-variant="dark" bordered hover :items="books" :fields="fields">
        <template v-slot:cell(settings)="book">
          <b-button size="sm"  variant="secondary" @click="ViewBook(book.item.id)">Ver</b-button>
          <b-button size="sm"  variant="primary" @click="EditBook(book.item.id)">Editar</b-button>
          <b-button size="sm"  variant="danger" @click="OpenDeleteModal(book.item)">Eliminar</b-button>
        </template>
      </b-table>    
    </div>
    <div>
      <b-modal centered title="Eliminar Libro" v-model="show_delete_modal">
          <p class="my-4">¿Esta seguro que desea eliminar el libro: {{selected_book.title}}?</p>
          <template #modal-footer>
          <div class="w-100">
            <b-row  class="float-right">
              <b-col>
                <b-button
                  variant="danger"
                  size="sm"
                  @click="DeleteBook(selected_book.id)"
                >
                  Eliminar
                </b-button>
              </b-col>
              <b-col>
                <b-button
                  variant="primary"
                  size="sm"
                  @click="show_delete_modal=false"
                >
                  Cancelar
                </b-button>
              </b-col>
            </b-row>
          </div>
        </template>
      </b-modal>   
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show_delete_modal: false,
      selected_book: {},
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
    },

    ViewBook: function(event) {
      let bookd_id = event;
      this.$router.push({path: `/ver/${bookd_id}`});
    },

    EditBook: function(event) {
      let bookd_id = event;
      this.$router.push({path: `/editar/${bookd_id}`});
    },

    OpenDeleteModal: function(event) {
      this.show_delete_modal = true;
      this.selected_book = event;
    },

    DeleteBook: async function(book_id) {
       try {
        let response = await this.$axios.delete("/api/books/"+book_id);
        if (response.status == 204) {
         location.reload();
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>