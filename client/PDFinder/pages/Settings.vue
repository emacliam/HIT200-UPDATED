<template>
<div class="bg-gray-200">
    <div class="flex flex-col items-center justify-center h-screen">

        <h2 class="text-teal-600 uppercase font-bold text-xl"> Preferences</h2>
        <hr class="my-4"/>
        <div class="flex flex-col py-4">
            <h2 class="text-teal-600 uppercase font-bold text-sm">Theme:</h2>
<div class="flex justify-center items-center text-lg">
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
<span class="m-1">Light</span>
  <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear"
       :class="[toggle === 'true' ? 'bg-green-400' : 'bg-gray-400']">
    <label for="toggle"
           class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
           :class="[toggle === 'true' ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400']"></label>
    <input type="checkbox" id="toggle" name="toggle"
           class="appearance-none w-full h-full active:outline-none focus:outline-none"
           @click="toggle === 'false' ? toggle = 'true' : toggle = 'false' " @change="value"/>
  </div>
  <span class="m-1">Dark</span>
</div>
  <div class="flex flex-col py-4">
            <h2 class="text-teal-600 uppercase font-bold text-sm">Product-Layout:</h2>
<div class="flex justify-center items-center text-lg">
<span class="m-1 flex items-center">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      <span>Grid</span>
</span>
  <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear"
       :class="[layout === 'true' ? 'bg-green-400' : 'bg-gray-400']">
    <label for="layout"
           class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
           :class="[layout === 'true' ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400']"></label>
    <input type="checkbox" id="layout" name="layout"
           class="appearance-none w-full h-full active:outline-none focus:outline-none"
           @click="layout === 'false' ? layout = 'true' : layout = 'false' " @change="layoutval"/>
  </div>
  <span class="m-1 flex items-center">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current w-4 h-4 mr-2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
       <p>List</p>
  </span>
</div>
        </div>

          <div class="flex flex-col py-4">
            <h2 class="text-teal-600 uppercase font-bold text-sm">Change Graph:</h2>
<div class="flex justify-center items-center text-lg">
<span class="m-1 flex items-center">
      <span>Line Graph</span>
</span>
  <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear"
       :class="[graph === 'true' ? 'bg-green-400' : 'bg-gray-400']">
    <label for="graph"
           class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
           :class="[graph === 'true' ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400']"></label>
    <input type="checkbox" id="graph" name="graph"
           class="appearance-none w-full h-full active:outline-none focus:outline-none"
           @click="graph === 'false' ? graph = 'true' : graph = 'false' " @change="graphval"/>
  </div>
  <span class="m-1 flex items-center">
       <p>Bar Graph</p>
  </span>
</div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isChecked:'',
            toggle:this.$auth.$state.user.isChecked,
            layout:this.$auth.$state.user.isLayout,
            graph:this.$auth.$state.user.isGraph
        }
    },
    methods: {
     async  value(){
         console.log(this.toggle)
         this.$nuxt.$loading.start()
 let data = {
     isChecked: this.toggle
 }
 console.log(data)
const response = await this.$axios.$put('/api/auth/user',data);
if(response.success){
    await this.$auth.fetchUser();
    this.$nuxt.$loading.finish()
}
},

 async  layoutval(){
         this.$nuxt.$loading.start()
 let data = {
     isLayout: this.layout
 }
 console.log(data)
const response = await this.$axios.$put('/api/auth/user',data);
if(response.success){
    await this.$auth.fetchUser();
    this.$nuxt.$loading.finish()
}
},

 async  graphval(){
         this.$nuxt.$loading.start()
 let data = {
     isGraph: this.graph
 }
 console.log(data)
const response = await this.$axios.$put('/api/auth/user',data);
if(response.success){
    await this.$auth.fetchUser();
    this.$nuxt.$loading.finish()
}
},
    },

}
</script>

<style>

</style>