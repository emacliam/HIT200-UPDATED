<template>
<main>
    <div class="w-1/2">
 <chartjs-line
    :beginzero="beginZero"
    :datalabel ="datalabel"
    :labels="labels"
    :data ="data"
    :fill="fill"
    :backgroundcolor="bgColor"
    :bordercolor = "borderColor"

    />
    </div>
    <!-- component -->
<div class="max-w-md mx-auto">
    <div class="flex flex-no-wrap sm:flex-row-reverse1 justify-center">
      <!-- left col -->
      <div class="w-2/5 sm:2/3 flex-none p-2 hidden lg:block"></div>
      <!--line column-->
      <div class="w-1/5 sm:1/3 flex-none float-left">
        <div class="bg-indigo-400 p-1 h-full w-1 mx-auto">
          <button
            class="h-24 w-24 mt-56 bg-indigo-400 hover:bg-indigo-600 text-white font-bold rounded-full -ml-12"
          >Day #2</button>
        </div>
      </div>
      <!--right column-->
      <div class="w-2/5 flex-none p-2">
        <div class="text-gray-700 float-left border-2 rounded border-green-200 bg-green-200 shadow-lg px-2">
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </div>

  </div>

</main>
</template>

<script>
export default {
    data() {
        return {
            beginZero: true,
            datalabel:"Products graph",
            labels:[2014,2015,2016,2017,2018],
            data:[10,7,17,14,24],
            fill:true,
            bgColor: "teal",
            borderColor:"#3f51b5"
        }
    },
    async asyncData({ $axios }){
        const response = await $axios.$get('/api/stats');
         console.log(response)
    }

}
</script>

<style>

</style>