<template>
  <main class="flex">

      <div class="flex-grow border-gray-400 border rounded-lg p-2 mt-8 ml-8 mr-8">
<div class="w-full">
    <span class="border p-2 rounded font-bold w-36">
Product Upload Graph
    </span>

  <div class="">
      <template v-if="$auth.$state.user.isGraph === 'false'">
          <chartjs-line
    :beginzero="beginZero"
    :datalabel ="datalabel"
    :labels="dates"
    :data ="results"
    :fill="fill"
    :backgroundcolor="bgColor"
    :bordercolor = "borderColor"

    />
      </template >

<template v-else-if="$auth.$state.user.isGraph === 'true'">
    <chartjs-bar
    :beginzero="beginZero"
    :datalabel ="datalabel"
    :labels="dates"
    :data ="results"
    :fill="fill"
    :backgroundcolor="bgColor"
    :bordercolor = "borderColor"

    />
</template>

    </div>
    <div>
        <span>
            Total Number of Products:
            <span class="rounded bg-teal-600 text-white p-2">
                {{TotalProducts}}
            </span>
        </span>
    </div>
</div>
      </div>
<div class="relative m-8 overflow-y-scroll border border-gray-400 rounded-lg pt-2 pl-1" style="width:20rem;">
<h2 class="uppercase text-teal-600 mb-8 font-bold">Product Timeline</h2>
<hr class="mb-3">
          <!-- <div class="border-l-4 border-black border-dotted h-full absolute top-0 z-0 mt-24" style="left: 7px"></div> -->
            <ul class="list-none m-0 p-0" v-for="(date, index) in dates" :key="date">
                <li class="">
                    <div class="flex items-center mb-1">
                        <div class=" z-10 px-1">
                            {{date}}
                        </div>
                        <span class="mx-2 rounded-full h-6 w-6 justify-center flex items-center bg-red-400 text-white font-bold">{{results[index]}}</span>
                    </div>
                    <div class="ml-24 border-l-2 border-gray-500 w-auto" v-for="product in products" :key="product._id">
                        <div  @click="timeline(product._id)" v-if="date === product.date" class="bg-teal-600 text-white rounded-lg px-1 w-auto h-6 m-2 cursor-pointer">
                            {{product.name}}
                        </div>
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
            products:'',
            TotalProducts:'',
            beginZero: true,
            datalabel:"Products",
            dates:'',
            results:'',
            fill:true,
            bgColor: "gray",
            borderColor:"teal",
            count:'',
        }
    },
    async asyncData({ $axios }){
      const product = await $axios.$get('/api/stats');
const total = product.products
 return {
     products: product.products,
    dates: Object.keys(product.result),
    results:Object.values(product.result),
    TotalProducts: total.length
  }

    },
    methods: {
        timeline(id){
            this.$router.push(`/products/${id}`)
        },
        bla(){
         /*    console.log(this.products[0].owner._id) */
        }
    },
  computed: {
 CountP: function(){
   let count = 0;
   this.products.forEach(element => {
       console.log(element)
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

<style>

</style>