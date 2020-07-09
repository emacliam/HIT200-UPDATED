<template>
   <main class="max-w-screen">
            <div class="mt-8 p-8 max-w-xl border rounded-lg bg-gray-100 m-auto">
              <div class="">
             <h2 class="uppercase font-bold">Add product</h2>
                <div class="">


                     <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Product Image</div>
                     <div class="flex items-center mt-4">
      <label class="w-48 h-8  text-center items-center bg-teal-600 rounded-lg text-blue font-bold tracking-wide uppercase border border-teal-600 cursor-pointer hover:bg-black hover:text-white">
        <span>Image</span>
        <input type='file' class="hidden" id="file" ref="file" v-on:change="handleFileUpload()"/>
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
                        placeholder="Product Name"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
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
                        placeholder="Business Category"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="category"

                      />
                    </div>
                  </div>
                </div>
<!--  2 -->
                <div class="">
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
                        placeholder="Size"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
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
                    >Product Type ( Add your Brand name here )

                 </div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                     <input
                        placeholder="Type"
                        type=""
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
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
                        placeholder="Price"
                        type=""
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
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
                      <textarea name="" id="" cols="30" rows="10" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      placeholder="description here ....."
                        v-model="description"

                      ></textarea>
                    </div>
                  </div>
                </div>
                        <div class="">
                            <span @click="onAddProduct" class="py-2 px-24 font-bold appearance-none outline-none m-auto hover:bg-black hover:text-white w-56 rounded bg-teal-600 cursor-pointer">
                                ADD
                            </span>
                        </div>

              </div>
            </div>
   </main>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      modal:'',
      size:'',
      type:'',
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
    async onAddProduct () {
      try {
        this.$nuxt.$loading.start()
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

      const result = await this.$axios.$post('/api/products', data)
     if(result.success === true){
       this.$toast.success('Product Added').goAway(2000);
       this.$nuxt.$loading.finish()
       this.$router.push('/products')

     }else{
       this.$toast.success('Something happened').goAway(2000);
       this.$nuxt.$loading.finish()

     }

      } catch (error) {
        this.$toast.success('Something happened').goAway(2000);
         this.$nuxt.$loading.finish()
      }
    },
      handleFileUpload(){
        this.selectedFile = event.target.files[0];
        this.fileName = event.target.files[0].name;
        /*
          Set the local file variable to what the user has selected.
        */
        this.selectedFile = this.$refs.file.files[0];

        /*
          Initialize a File Reader object
        */
        let reader  = new FileReader();

        /*
          Add an event listener to the reader that when the file
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
        reader.addEventListener("load", function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this), false);

        /*
          Check to see if the file is not empty.
        */
        if( this.selectedFile ){
          /*
            Ensure the file is an image file.
          */
          if ( /\.(jpe?g|png|gif)$/i.test( this.selectedFile.name ) ) {
            /*
              Fire the readAsDataURL method which will read the file in and
              upon completion fire a 'load' event which we will listen to and
              display the image in the preview.
            */
            reader.readAsDataURL( this.selectedFile );
          }
        }
      }
  }
}
</script>