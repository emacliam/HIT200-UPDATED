<template>
<main>
   <div class="w-screen h-screen flex justify-center items-center bg-gray-50">

      <div class=" px-2 w-full">
         <form
            action=""
            class="max-w-sm bg-gray-100 px-3 py-5 rounded shadow-lg my-10 m-auto wrapper"
         >
            <div class="flex flex-col space-y-3 h-full">
                 <div class="text-center w-full uppercase text-teal-600 font-bold">
         <p>Enter The access code you received From productFinder</p>
         <br>
         <p>If you did not receive it please check your spam folder or contact Us</p>
      </div>
      <hr>
               <div
                  class="flex items-center  rounded px-2 h-full"
               >

                  <input
                     type="text"
                     placeholder="Access Code"
                     class="w-full py-2 px-1 outline-none placeholder-opacity-50 border border-gray-400"
                     autocomplete="off"
                     v-model="accessCode"
                  />
               </div>
               <span
               @click="onEvaluate"
                  class="bg-teal-600 px-4 py-2 rounded-lg hover:bg-black hover:text-white text-center mt-24 font-bold"
               >
                  Evaluate
               </span>
            </div>
         </form>
      </div>
   </div>
</main>

</template>

<script>
export default {
   layout:"none",
    data() {
         return {
            accessCode:''
         }
      },
   methods: {
      async onEvaluate(){
         try {
         const response = await this.$axios.$get('/api/access');

         if(response.success){
         const responz = await response.access.filter((access) => access.accesscode === this.accessCode).shift();
         console.log(responz)
         if(responz.accesscode === this.accessCode){
            this.$toast.success('Access Granted').goAway(2000);
            this.$router.push('/signup')

         }

         }

         } catch (err) {
            this.$toast.error("something went wrong try again").goAway(2000);
            this.$router.push('/')
         }


      }
   },

}
</script>

<style scoped>
.wrapper{
   height:30rem;
}
</style>