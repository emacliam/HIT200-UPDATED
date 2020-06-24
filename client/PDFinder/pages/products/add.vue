<template>
   <main>
      <div>

        <section>
         <div class="p-5">
            <div class="mt-8 p-4">
              <div>

                <div class="flex flex-col md:flex-row">
                     <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Image</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-dotted h-24 w-48 border-gray-500 rounded svelte-1l8159u"
                    >
                       <input type="file" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 text-2xl " @change="onFileSelected" />

                    </div>
                      <p></p>
                  </div>

                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <label  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"  >Product Name</label>
                    <br>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Product Name"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"

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
                        placeholder="Business Category"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"

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
                        placeholder="Model"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"

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
                        placeholder=""
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"

                      />
                    </div>
                  </div>
                </div>
  <!--  3 -->
                     <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Type</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                    <input
                        placeholder="jhon@doe.com"
                        type="email"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"

                      />

                    </div>
                  </div>
                   <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Business Email Address</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="jhon@doe.com"
                        type="email"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"

                      />
                    </div>
                  </div>
                </div>

                  <!--  3 -->
                     <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Business Type</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                     <input
                        placeholder="jhon@doe.com"
                        type="email"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"

                      />
                    </div>
                  </div>
                   <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product description</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <textarea name="" id="" cols="30" rows="10" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"></textarea>
                    </div>
                  </div>
                </div>
                        <div>
                            <button class="p-1 px-2 appearance-none outline-none w-24 m-auto text-gray-800 rounded bg-teal-600 ">
                                ADD
                            </button>
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
  async asyncData ({ $axios }) {
    try {
      const categories = $axios.$get('http://localhost:3000/api/categories')
      const owner = $axios.$get('http://localhost:3000/api/owners')
      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owner
      ])

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      categoryID: '',
      ownerID: '',
      title: '',
      price: 0,
      description: '',
      selectedFile: null,
      stockQuantity: 1,
      fileName: ''

    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
      this.fileName = event.target.files[0].name
    },
    async onAddProduct () {
      const data = new FormData()
      data.append('categoryID', this.categoryID)
      data.append('ownerID', this.ownerID)
      data.append('title', this.title)
      data.append('price', this.price)
      data.append('description', this.description)
      data.append('stockQuantity', this.stockQuantity)
      data.append('photo', this.selectedFile, this.selectedFile.name)

      const result = await this.$axios.$post('http://localhost:3000/api/products', data)
      console.log(result)

      this.$router.push('/')
    }
  }
}
</script>