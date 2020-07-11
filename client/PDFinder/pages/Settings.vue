<template>
<div class="bg-gray-200">
    <div class="flex flex-col items-center justify-center h-screen">
        Preferences
        <div class="flex flex-col">
            <h2>Theme:</h2>
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
        </div>
    </div>


     <div class="flex flex-col items-center justify-center h-screen">
        <div class="flex flex-col">
            <h2>Product-Layout:</h2>
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
        </div>
    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            isChecked:'',
            toggle:this.$auth.$state.user.isChecked
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
}
    },

}
</script>

<style>

</style>