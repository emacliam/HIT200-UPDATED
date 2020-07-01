<template>
   <main>
 <!-- component -->
<!-- item card -->
<div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
   <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" :src="product.photo">
   <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
         <h2 class="text-xl text-gray-800 font-medium mr-auto">{{product.name}}</h2>
         <p class="text-gray-800 font-semibold tracking-tighter">
            ${{product.price}}
         </p>
      </div>
      <p class="text-sm text-gray-700 mt-4 h-32 overflow-y-scroll">
        {{product.description}}
      </p>
      <div class="flex items-center justify-end mt-4 top-auto">
         <button class="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
         <button class=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">Edit</button>
      </div>
   </div>
</div>
   </main>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    try {
      const response = await $axios.$get(`/api/products/${params.id}`)
      return {
        product: response.product[0]
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      categoryID: null,
      ownerID: null,
      title: '',
      price: '',
      description: '',
      selectedFile: null,
      stockQuantity: '',
      fileName: ''

    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
      this.fileName = event.target.files[0].name
    },
    async onUpdateProduct () {
      const data = new FormData()
      data.append('title', this.title)
      data.append('price', this.price)
      data.append('description', this.description)
      data.append('ownerID', this.ownerID)
      data.append('stockQuantity', this.stockQuantity)
      data.append('categoryID', this.categoryID)
      data.append('photo', this.selectedFile, this.selectedFile.name)
      const result = await this.$axios.$put(`/api/products/${this.$route.params.id}`, data)
      console.log(result)

      this.$router.push('/')
    }
  }
}
</script>
