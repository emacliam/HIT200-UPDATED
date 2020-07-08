<template>
   <main class="bg-gray-100">

     <div class="flex bg-gray-100">
          <div class="w-3/4">
<div class="bg-white my-4 mx-1 shadow p-8 rounded-lg w-full">
    <div class="flex items-center mb-4">
        <h2 class="text-xl font-bold">Product</h2>
    </div>

    <div class="w-full flex items-center">
      <div class="flex flex-col items-center">
 <img class="h-24 w-24  object-cover rounded-full border border-teal-600 pb-5/6" :src="product.photo">
    <label class=" flex flex-col items-center p-1 text-blue uppercase cursor-pointer hover:text-teal-600">
        <span class="leading-normal text-sm">Upload Photo</span>
        <input type='file' class="hidden" @change="onPhoto" />
    </label>

      </div>
      <div class="ml-8">
 <h2 class="text-xl text-gray-800 font-medium mr-auto">{{product.name}}</h2>
  <br>
 <span>Star rating here</span>
 <br>
 <span class="text-gray-500 text-sm">Added on Date</span>
      </div>


    </div>
</div>

       <!-- component -->
<div class="bg-white my-4 mx-1 shadow p-8 rounded-lg w-full">
    <div class="flex items-center mb-4">
        <h2 class="text-xl font-bold">Details</h2>
    </div>

    <div class="w-full">
      <section class="mt-8 ">Price:  ${{product.price}}</section>
      <hr>
      <section class="mt-8 ">Model:  {{product.modal}}</section>
      <hr>
      <section class="mt-8 ">Size:   {{product.size}}</section>
      <hr>
      <section class="mt-8 ">Type:   {{product.type}}</section>
      <hr>
    </div>
      <div class="flex items-center justify-end mt-4 top-auto">
        <nuxt-link :to="`/products/Edit/${product._id}`" class="bg-teal-600  px-2 py-2 rounded mr-2 hover:bg-black hover:text-white w-24">Edit</nuxt-link>
      </div>
</div>

     </div>
     <div class="w-full">
       <!-- component -->
<div class="bg-white my-4 mx-2 shadow p-8 rounded-lg h-auto">
    <div class="flex items-center mb-4">
        <h2 class="text-xl font-bold">Product Description</h2>
    </div>

    <div class="w-full mb-24">
       {{product.description}}
    </div>
    <hr>
       <h2 class="text-xl font-bold mt-4">Gallery Images</h2>
       <span class="text-gray-600">max(4)</span>
       <P>NOTE:Upload one at a time</P>
       <div class="mt-12">
<!-- component -->
<div class="flex items-center w-full bg-gray-300 p-2 rounded-lg">
<div class="flex h-24 w-24 items-center justify-center bg-grey-lighter ">
    <label class="w-24 h-24 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-full tracking-wide uppercase border border-teal-600 cursor-pointer hover:bg-black hover:text-white">
        <span class="mt-2 leading-normal text-2xl">+</span>
        <input type='file' class="hidden" @change="onFileSelected" />
    </label>
</div>
<div v-for="(img, index)  in product.gallery" :key="index" class="flex flex-col items-center">
  <div>
 <img :src="img" alt="" class="h-24 w-24 rounded-full m-3">

  </div>
   <span v-if="img" @click="onDelete(index, img)" class="text-sm text-red-600 hover:text-teal-600 cursor-pointer">Delete</span>

</div>
</div>

       </div>

</div>

     </div>

     </div>
     <div>
       <div class="bg-white my-4 mx-2 shadow p-8 rounded-lg ">
    <div class="flex items-center mb-4 ">
        <h2 class="text-xl font-bold">Product Reviews</h2>
    </div>

    <div class="w-full">

<!-- component -->
<div class="flex items-start">
  <div class="flex-shrink-0">
    <div class="inline-block relative">
      <div class="relative w-16 h-16 rounded-full overflow-hidden">
        <img class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture">
        <div class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
      </div>
    </div>
  </div>
  <div class="ml-6">
    <p class="flex items-baseline">
      <span class="text-gray-600 font-bold">Mary T.</span>
    </p>

   <div class="mt-3">
      <span class="font-bold">COMMENT TITLE</span>
      <p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>




<!-- component -->
<!-- comment form -->
   <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
      <div class="flex flex-wrap -mx-3 mb-6">
         <h2 class="px-4 pt-3 pb-2 text-gray-800 text-xl font-bold">Reply</h2>
         <div class="w-full md:w-full px-3 mb-2 mt-2">
            <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-12 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Reply to comment' required></textarea>
         </div>
         <div class="w-full md:w-full flex items-start px-3">
            <div class="-mr-1">
               <span class="bg-teal-600 font-medium py-1 px-4 rounded-lg tracking-wide mr-1 hover:bg-black hover:text-white">Post</span>
            </div>
         </div>
      </div>
      </form>

<hr>
  </div>
</div>

    </div>
</div><!-- component -->
     </div>

   </main>
</template>

<script>
export default {

  data () {
    return {
      product:{},
      show:false,
      categoryID: null,
      ownerID: null,
      title: '',
      price: '',
      description: '',
      selectedFile: null,
      stockQuantity: '',
      fileName: '',
    }
  },
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
  methods: {
    async onFileSelected (event) {
      this.$nuxt.$loading.start()
      this.selectedFile = event.target.files[0]
      this.fileName = event.target.files[0].name
      const data = new FormData()
      data.append('gallery', this.selectedFile, this.fileName)
      const result = await this.$axios.$put(`/api/gallery/${this.$route.params.id}`, data)
     if(result.success === "limit"){
        this.$toast.error("Sorry upload reached").goAway(4000);
        this.$nuxt.$loading.finish()
     }
     else{
       /* const response = await this.$axios.$get(`/api/products/${params.id}`)
       return{
         product: response.
       } */
       const data = await this.$options.asyncData(this.$root.$options.context)
       this.product = data.product

       this.$toast.success("Image Uploaded Reload for them to show").goAway(4000);
       this.$nuxt.$loading.finish()
     }
     this.$router.push(`/products/${this.$route.params.id}`);
    },
  async onDelete(index, name){
    this.$nuxt.$loading.start()
  const rep = /\u002F/gi;
  const link =  await name.replace(rep,"=")
  const response = await this.$axios.$post(`/api/gallery/${link}/${this.$route.params.id}`)
  console.log(response)
  if(response.success){
       const data = await this.$options.asyncData(this.$root.$options.context)
       this.product = data.product
       this.$toast.success('Image Deleted please reload your browser').goAway(4000);
          this.$nuxt.$loading.finish()

  }
  else{
    this.$nuxt.$loading.finish()
    this.$toast.error("Sorry try again later").goAway(4000);
  }
  },
  async onPhoto(){

  this.$nuxt.$loading.start()
      this.selectedFile = event.target.files[0]
      this.fileName = event.target.files[0].name
      const data = new FormData()
      data.append('product', this.selectedFile, this.fileName)
  const response = await this.$axios.$put(`/api/image/product/${this.$route.params.id}`,data)

    if(response.success){
        const data = await this.$options.asyncData(this.$root.$options.context)
       this.product = data.product
    this.$toast.success('Image Deleted please reload your browser').goAway(4000);
        this.$nuxt.$loading.finish()
    }else{
     this.$nuxt.$loading.finish()
    this.$toast.error("Sorry try again later").goAway(4000);
    }
  }
  }
}
</script>

<style scoped>


</style>