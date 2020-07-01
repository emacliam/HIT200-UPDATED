<template>
   <main>
     <div>

        <section>
         <div class="p-5">
            <div class="mt-8 p-4">
              <div>
                <div class="flex items-center">
                  <img :src="product.photo" alt="Product image" class="text-sm border-2 border-double border-teal-600 p-1 rounded-full w-24 h-24">
                  <p class="m-2">Edit <span class="font-bold text-teal-600">{{product.name}}</span></p>
                </div>

                <div class="flex flex-col md:flex-row">
                     <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Image</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-dotted h-24 w-48 border-gray-500 rounded svelte-1l8159u"
                    >
                       <input type="file" class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 text-2xl " @change="onFileSelected" />

                    </div>
                      <p>{{fileName}}</p>
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
                      <input
                        :placeholder="product.category"
                        class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                        v-model="category"

                      />
                    </div>
                  </div>
                </div>
<!--  2 -->
                <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Model</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        :placeholder="product.modal"
                        class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                        v-model="modal"

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
                     <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                      <div>
                        <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Type ( Add your Brand name here )

                 </div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                     <input
                        :placeholder="product.type"
                        type=""
                        class="p-1 px-2 appearance-none outline-none font-medium w-full text-gray-800 placeholder-black"
                        v-model="type"

                      />
                    </div>
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
                            <span @click="onUpdateProduct" class="py-2 px-16 appearance-none outline-none m-auto text-gray-800 rounded bg-teal-600 cursor-pointer">
                                EDIT
                            </span>
                        </div>

              </div>
            </div>
          </div>
        </section>
      </div>
   </main>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    try {
      const response = await $axios.$get(`http://localhost:3000/api/products/${params.id}`)
      console.log(response.product[0])
      return {
        product: response.product[0]
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
       return {
      name: '',
      price: "",
      modal:'',
      size:'',
      type:'',
      category:'',
      description: '',
      selectedFile: null,
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
      data.append('ownerID', this.$auth.$state.user._id)
      data.append('name', this.name)
      data.append('price', this.price)
      data.append('description', this.description)
      data.append('modal', this.modal)
      data.append('size', this.size)
      data.append('type', this.type)
      data.append('category', this.category)
      data.append('photo', this.selectedFile, this.selectedFile.name)
      const result = await this.$axios.$put(`http://localhost:3000/api/products/${this.$route.params.id}`, data)
      console.log(result)

      this.$router.push('/products')
    }
  }
}
</script>
