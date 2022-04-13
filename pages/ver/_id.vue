<template>
	<div class="container-sm mt-4">
    <div>
			<h1 class="display-5 font-weight-light">Descripción</h1>
			<b-row>
				<b-col cols=2>
					<b-img  style="width:250px;" src="https://st2.depositphotos.com/2885805/43183/v/450/depositphotos_431838008-stock-illustration-lying-black-book-composition.jpg" fluid thumbnail></b-img>   
				</b-col>
				<b-col cols=6>
					<p>
						Titulo: {{book.title}}
						<br>
						Autor: {{book.author}}
						<br>
						Idioma: {{book.language}}
						<br>
						ID: {{book.id}}
						<br>
						Sku: {{book.sku}}
						<br>
						Paginas: {{book.pages}}
						<br>
						Fecha creación: {{book.created_at}}
					</p>
				</b-col>
				<b-col>
					<b-button size="sm" v-b-toggle.sidebar-variant>Ver más</b-button>
					<b-button size="sm"  variant="primary" @click="EditBook(book.id)">Editar</b-button>
					<b-button size="sm" variant="danger" @click="OpenDeleteModal(book)">Eliminar</b-button>
				</b-col>
			</b-row>
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
		<div>
      <b-modal centered title="Eliminar Libro" v-model="show_delete_modal">
          <p class="my-4">¿Esta seguro que desea eliminar el libro: {{book.title}}?</p>
          <template #modal-footer>
          <div class="w-100">
            <b-row  class="float-right">
              <b-col>
                <b-button
                  variant="danger"
                  size="sm"
                  @click="DeleteBook(book.id)"
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
  data () {
    return{
			show_delete_modal: false,
      book: {}
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
         this.$router.push({path: '/'})
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