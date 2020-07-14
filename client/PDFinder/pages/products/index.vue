<template>
  <main>
    <div class="flex h-screen bg-gray-200 font-roboto">
        <div class="flex-1 flex flex-col">
            <main class="flex-1 bg-gray-200">
                <div class="container mx-auto px-6 py-8">

                    <div class="mt-4">
                        <div class="flex flex-wrap -mx-6">

                            <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                    <div class="p-3 rounded-full bg-teal-600 bg-opacity-75">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                                            <path d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                    </div>

                                    <div class="mx-5">
                                      <div>
                                        <h4 class="text-2xl font-semibold text-gray-700" >{{ CountProducts }}</h4>

                                      </div>
                                        <div class="text-gray-500">Available Products</div>
                                    </div>
                                </div>
                            </div>
                               <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">Sort By</h2>
            </div>
            <div class="flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                            class="h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="property">
                           <option></option>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                            <option>Category</option>
                            <option>Description</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500" v-model="order">
                           <option></option>
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search" type="text" v-model="search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>

            </div>
             <button class="rounded-lg w-auto px-4 mt-2 bg-blue-400 hover:text-teal-600" @click="Method">Sort</button>
        </div>
    </div>

                        </div>
                    </div>

                    <div class="">

                    </div>

                    <template v-if="$auth.$state.user.isLayout === 'true'" class="flex flex-col">
                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div class="align-middle inline-block min-w-full shadow sm:rounded-lg border-b border-teal-600">
                                <table class="min-w-full">
                                    <thead>
                                    <tr>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-teal-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-teal-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Model</th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-teal-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price($)</th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-teal-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                                        <th class="px-6 py-3 border-b border-gray-200 bg-teal-100"></th>
                                    </tr>
                                    </thead>

                                    <tbody class="bg-white" v-for="(product, index) in filteredProducts" :key="product._id" >
                                        <!-- v-if="product.owner._id === $auth.$state.user._id" -->

                                    <tr v-if="product.owner._id === $auth.$state.user._id">
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full" :src="product.imageUrl" alt="" />
                                                </div>

                                                <div class="ml-4">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">{{product.name}}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-sm leading-5 text-gray-900">{{product.model}}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                          <div>
                                            <span class="">$</span>
                                             <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{ product.price }}</span>
                                          </div>

                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"></td>

                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <nuxt-link :to="`/products/Edit/${product._id}`" class="text-indigo-600 hover:text-indigo-900 border-r-2 px-2 border-teal-600">Edit</nuxt-link>
                                            <a href="#" @click="onDeleteProduct(product._id, index)" class="text-red-600 hover:text-indigo-900 px-2 border-r-2 border-teal-600">Delete</a>
                                            <nuxt-link :to="`/products/${product._id}`" title="more" class="text-teal-800 hover:text-indigo-900 px-2">...</nuxt-link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </template>

                    <template v-else-if="$auth.$state.user.isLayout === 'false'" class="w-screen">
                        <div class="w-full flex flex-wrap">
                             <div v-for="(product, index) in filteredProducts" :key="product._id"  class="flex flex-wrap w-56">
                            <div class="flex flex-col w-auto m-2 items-center border p-2 border-gray-500 rounded-lg bg-white" v-if="product.owner._id === $auth.$state.user._id">
                                <img class="h-36 w-36 rounded-lg" :src="product.imageUrl" alt="" />
                            <div class="m-4">
                                  <div class="text-sm leading-5 font-medium text-gray-900">{{product.name}}</div>
                                  <div class="text-sm leading-5 text-gray-900">{{product.model}}</div>
                            </div>
                            <div>
                                  <nuxt-link :to="`/products/Edit/${product._id}`" class="text-indigo-600 hover:text-indigo-900 border-r-2 px-2 border-teal-600">Edit</nuxt-link>
                                  <a href="#" @click="onDeleteProduct(product._id, index)" class="text-red-600 hover:text-indigo-900 px-2 border-r-2 border-teal-600">Delete</a>
                                  <nuxt-link :to="`/products/${product._id}`" title="more" class="text-teal-800 hover:text-indigo-900 px-2">More..</nuxt-link>
                            </div>
                            </div>
                        </div>
                        </div>

                    </template>

                </div>
            </main>
        </div>
    </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            products:'',
            value:'',
            search:'',
            property:'',
            order:'',
            count:''
        }
    },
  // async data is fetching data before loading page
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('/api/products');
      const prod = response.products
      return {
        products: prod
      }
    } catch (err) {
    }
  },
  methods: {
    async onDeleteProduct (id, index) {
        this.$nuxt.$loading.start()
      try {
        const response = await this.$axios.$delete(`/api/products/${id}`)
        if (response.success === true) {
          this.products.splice(index, 1)
          if(this.products){
            const data = await this.$options.asyncData(this.$root.$options.context)
           this.products = data.products
          }

           this.$toast.success('Image Deleted').goAway(2000);
           this.$nuxt.$loading.finish()
        }
      } catch (error) {
        console.log(error)
        this.$toast.error('Something went wrong').goAway(2000);
      }


    },
 Sort(property,order){
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        if(a[property] < b[property]){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
}
    },
    async Method(){

        this.products = this.products.sort(this.Sort(this.property || 'name',this.order || 'asc'))

    }/* ,
    async Onchange(){
        console.log(this.value)
        var marvelHeroes =  this.products.filter(function(prod) {
       	return prod.name == this.value;
});
    } */,
/*   Onchange() {
        function escapeRegExp(s) {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  const words = this.value
    .split(/\s+/g)
    .map(s => s.trim())
    .filter(s => !!s);
  const hasTrailingSpace = this.value.endsWith(" ");
  const searchRegex = new RegExp(
    words
      .map((word, i) => {
        if (i + 1 === words.length && !hasTrailingSpace) {
          // The last word - ok with the word being "startswith"-like
          return `(?=.*\\b${escapeRegExp(word)})`;
        } else {
          // Not the last word - expect the whole word exactly
          return `(?=.*\\b${escapeRegExp(word)}\\b)`;
        }
      })
      .join("") + ".+",
    "gi"
  );
 this.products.reduce(function (item){
    const res = searchRegex.exec(item.name)
}); */
},
  computed: {
  filteredProducts: function(){
    return this.products.filter((blog)=>{
     return blog.name.match(this.search)
    })
  },
 CountProducts: function(){
   let count = 0;
   this.products.forEach(element => {
      if(this.$auth.$state.user._id === element.owner._id){
       count++
      }
      return count
    });
    return count
  }
}
}

</script>