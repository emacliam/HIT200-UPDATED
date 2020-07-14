<template>
   <main class="max-w-screen">
            <div class="mt-8 p-4 max-w-xl border rounded-lg bg-gray-100 m-auto">
              <div>
                <div class="flex items-center">
                  <div>
  <img :src="product.imageUrl" alt="Product image" class="text-sm border-2 border-double border-teal-600 p-1 rounded-full w-24 h-24">
  <p class="text-sm text-gray-500 leading-tight italic">(current Image)</p>
                  </div>

                  <p class="ml-24 text-2xl">Edit <span class="font-bold text-teal-600 text-xl">{{product.name}}</span></p>
                </div>

                <div class="">
                     <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Image</div>
                             <div class="flex items-center mt-4">
      <label class="w-48 h-8  text-center items-center bg-teal-600 rounded-lg text-blue font-bold tracking-wide uppercase border border-teal-600 cursor-pointer hover:bg-black hover:text-white">
        <span>Image</span>
        <input type='file' class="hidden" v-on:change="handleFileUpload()"/>
      </label>
      <img v-bind:src="imagePreview" v-show="showPreview" class="w-24 rounded-full border border-teal-600 h-24 ml-4"/>
    </div>

                  </div>


                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <label  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"  >Product Name</label>
                    <br>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        :placeholder="product.name"
                        class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                        v-model="name"

                      />
                    </div>
                  </div>
                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                        <label  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Product Category</label>
                     <br>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <select  class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="category">
                        <option v-for="category in categories" :key="category._id" class="flex" :value="category.name">
                          <span class="w-16">{{category.name}}</span>
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
<!-- 2 -->
                <div class="">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Model</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        :placeholder="product.model"
                        class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                        v-model="model"

                      />
                    </div>
                  </div>
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Size</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        :placeholder="product.size"
                        class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                        v-model="size"
                      />
                    </div>
                  </div>
                </div>

                  <!--  3 -->
                     <div class="mb-8">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                      <div>
                     <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Price</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                     <input
                        :placeholder="product.price"
                        type=""
                        class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                        v-model="price"

                      />
                    </div>
                      </div>

                  </div>
                   <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product description</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <textarea name="" id="" cols="30" rows="10" class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                      :placeholder="product.description"
                        v-model="description"

                      ></textarea>
                    </div>
                  </div>
                </div>
                        <div>
                            <span @click="onUpdateProduct" class="py-2 px-24 hover:text-white hover:bg-black appearance-none outline-none m-auto  rounded bg-teal-600 cursor-pointer">
                                EDIT
                            </span>
                        </div>

              </div>
            </div>
   </main>
</template>
 let response =  $axios.$get("/api/countries");
      let Singleaddress = $axios.$get(`/api/addresses/${ params.id }`);

      let [countriesResponse, addressResponse] = await Promise.all([
        response,
        Singleaddress
      ])

      return {
        countries: countriesResponse,
        address: addressResponse.address
      };
<script>
export default {
  async asyncData ({ $axios, params }) {
    try {
      const response = await $axios.$get(`/api/products/${params.id}`)
      const categories = await $axios.$get('/api/categories');

       let [productResponse, categoriesResponse] = await Promise.all([
        response,
        categories
      ])
      categories: response.categories
      return {
        product: productResponse.product[0],
        categories: categoriesResponse.categories
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
       return {
      product:'',
      name: '',
      price: "",
      model:'',
      size:'',
      category:'',
      description: '',
      selectedFile: null,
      fileName: '',
      file:'',
      showPreview: false,
      imagePreview: ''

    }
  },
  methods: {
    async onUpdateProduct () {
   try {
       this.$nuxt.$loading.start()
        const data = {
          ownerID:this.$auth.$state.user._id,
          name:this.name,
          price:this.price,
          description:this.description,
          model:this.model,
          size:this.size,
          category:this.category
        }
      /* data.append('imageUrl', this.selectedFile, this.selectedFile.name) */
     const result = await this.$axios.$put(`/api/products/${this.$route.params.id}`,data)
     console.log(result)
     if(result.success === true){
       this.$toast.success('Product Edited').goAway(2000);
       this.$nuxt.$loading.finish()
       this.$router.push('/products')

     }else{
       this.$toast.error('Something happened').goAway(2000);
       this.$nuxt.$loading.finish()

     }


   } catch (error) {
     this.$toast.error('Something happened').goAway(2000);
     this.$nuxt.$loading.finish()
   }

    },
      async handleFileUpload(){
         this.$nuxt.$loading.start()
        try {
          this.selectedFile = event.target.files[0];
        this.fileName = event.target.files[0].name;
          let data = new FormData();
        data.append("imageUrl",this.selectedFile, this.selectedFile.name);

        let response = await this.$axios.$put(`/api/products/image/${this.$route.params.id}`, data)
        if(response.success){
          const data = await this.$options.asyncData(this.$root.$options.context)
          console.log(data)
          this.product = data.product
          this.$nuxt.$loading.finish()
          this.$toast.success('successfully uploaded').goAway(4000);
        }else{
          this.$nuxt.$loading.finish()
          this.$toast.error('something happened failed to upload').goAway(4000);
        }
        } catch (err) {
          console.log(err)

        }

      }
  }
}
</script>
