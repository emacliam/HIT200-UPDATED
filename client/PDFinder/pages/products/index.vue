<template>
  <main>
<div>
<div>
    <script src="https://dashboard-tailwindcomponents.netlify.app/assets/build/js/main.js?id=df2dfe6a4e2040ea9f2c"></script>
    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200 font-roboto">
        <div class="flex-1 flex flex-col overflow-hidden">
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
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
                                        <h4 class="text-2xl font-semibold text-gray-700">{{products.length}}</h4>
                                        <div class="text-gray-500">Available Products</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">

                    </div>

                    <div class="flex flex-col mt-8">
                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-teal-600">
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

                                    <tbody class="bg-white">
                                    <tr v-for="(product, index) in products" :key="product._id">
                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full" :src="product.photo" alt="" />
                                                </div>

                                                <div class="ml-4">
                                                    <div class="text-sm leading-5 font-medium text-gray-900">{{product.name}}</div>
                                                    <div class="text-sm leading-5 text-gray-500">{{product.type}}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-sm leading-5 text-gray-900">{{product.modal}}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{{ product.price }}</span>
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
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>

  </div>
  </main>
</template>

<script>
export default {
  // async data is fetching data before loading page
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('/api/products')
      console.log(response);
      return {
        products: response.products
      }
    } catch (err) {
    }
  },
  methods: {
    async onDeleteProduct (id, index) {
      try {
        const response = await this.$axios.$delete(`/api/products/${id}`)
        if (response.status) {
          this.products.splice(index, 1)
        }
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>

<style>

</style>