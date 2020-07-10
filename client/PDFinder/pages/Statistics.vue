<template>
  <main class="flex">

      <div>
<div>
    Graph

    <div>
        <span>
            Total Number of Products:
            <span>
                {{total}}
            </span>
        </span>
    </div>
</div>
      </div>
<div class="relative w-1/2 m-8">
<h2 class="uppercase text-teal-600 mb-8 font-bold">Product Timeline</h2>
<hr class="mb-3">
            <div class="border-r-2 border-gray-200 border-dotted absolute h-full top-0 z-0" style="left: 7px"></div>
            <ul class="list-none m-0 p-0" v-for="dates in dates" :key="dates">
                <li class="mb-2">
                    <div class="flex items-center mb-1">
                        <div class="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10">
                        </div>
                        <div class="flex-1 ml-4 font-medium">{{dates}}</div>
                    </div>
                    <div class="ml-12" v-for="product in products" :key="product._id">
                        <nuxt-link  :to="`/products/${product._id}`"  v-if="dates === product.date" class="bg-teal-600 rounded-lg px-8 py-1 mb-4 w-48 cursor-pointer">
                            {{product.name}}
                        </nuxt-link>
                    </div>
                </li>
            </ul>
        </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            TotalProducts:''
        }
    },
    async asyncData({ $axios }){
      const dates = $axios.$get('/api/stats');
      const products = $axios.$get('/api/products');

const [DatesResponse, productResponse] = await Promise.all([
   dates,
   products
 ])
const TotalProducts = productResponse.products.length

 return {
    dates: Object.keys(DatesResponse.result),
    products: productResponse.products,
    total: TotalProducts
  }

    }

}
</script>

<style>

</style>