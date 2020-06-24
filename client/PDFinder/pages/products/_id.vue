<template>
   <main>
       <div class="container-fluid">
           <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                       <h2 style="text-align:center ">Update {{product.title}}</h2>
                       <p style="color:orange">Note:please update each and every field</p>
                       <form style="margin-bottom:4rem">
                           <!-- category dropdown -->
                           <div class="a-spacing-top-medium">
                            <label>Category</label>
                            <select name="" id="" class="a-select-option" v-model="categoryID">
                                 <option
                                v-for="category in categories"
                                :value="category._id"
                                :key="category._id"
                                >{{category.type}}</option>
                            </select>
                           </div>
                           <!-- Owner -->
                           <div class="a-spacing-top-medium">
                            <label>Owner</label>
                            <select name="" id="" class="a-select-option" v-model="ownerID">
                                <option
                                v-for="owner in owners"
                                :value="owner._id"
                                :key="owner._id"
                                >{{owner.name}}</option>
                            </select>
                           </div>
                           <!-- title -->
                           <div class="a-spacing-top-medium">
                               <label style="">Title</label>
                               <input type="text" class="a-input-text" style="width:100%" v-model="title" :placeholder="product.title" />

                           </div>
                            <!-- price -->
                           <div class="a-spacing-top-medium">
                               <label style="">Price</label>
                               <input type="number" class="a-input-text" style="width:100%"  v-model="price" :placeholder="product.price" />

                           </div>
                             <!-- stockQuantity -->
                           <div class="a-spacing-top-medium">
                               <label style="">Stock Quantity</label>
                               <input type="number" class="a-input-text" style="width:100%"  v-model="stockQuantity"  :placeholder="product.stockQuantity" />

                           </div>
                            <!-- description -->
                           <div class="a-spacing-top-medium">
                               <label style="">Description</label>
                              <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="10"
                              style="width:100%"
                               v-model="description"
                               :placeholder="product.description"
                              ></textarea>

                           </div>
                             <!-- photo -->
                           <div class="a-spacing-top-medium" style="width:100%">
                               <label style="">Add Photo</label>
                               <div class="a-row a-spacing-top-medium">
                                   <label class="choosefile-button" style="width:100%">
                                       <i class="fal fa-plus"></i>
                                       <input type="file" name="" id="" @change=" onFileSelected">
                                       <p style="margin-top:-70px;">{{ fileName }}</p>
                                   </label>
                               </div>

                           </div>
                           <!-- submit button -->
                           <hr/>
                           <div class="a-spacing-top-large">
                               <span class="a-button-register">
                                  <span class="a-button-inner">
                                      <span class="a-button-text" @click="onUpdateProduct">
                                          Update product
                                      </span>
                                      <p>{{product.title}}</p>

                                  </span>

                               </span>

                           </div>
                       </form>
                    </div>
                </div>
                <div class="col-sm-3"></div>
           </div>
       </div>
   </main>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    try {
      const categories = $axios.$get('http://localhost:3000/api/categories')
      const owner = $axios.$get('http://localhost:3000/api/owners')
      const product = $axios.$get(`http://localhost:3000/api/products/${params.id}`)
      const [catResponse, ownerResponse, productResponse] = await Promise.all([
        categories,
        owner,
        product
      ])
      console.log(productResponse.product[0])

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        product: productResponse.product[0]
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
      const result = await this.$axios.$put(`http://localhost:3000/api/products/${this.$route.params.id}`, data)
      console.log(result)

      this.$router.push('/')
    }
  }
}
</script>
