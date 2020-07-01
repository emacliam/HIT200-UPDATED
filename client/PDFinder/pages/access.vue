<template>
<main>
   <div class="w-screen h-screen flex justify-center items-center bg-gray-50">

      <div class="wrapper px-2 w-full">
         <form
            action=""
            class="max-w-sm bg-gray-100 px-3 py-5 rounded shadow-lg my-10 m-auto"
         >
            <div class="flex flex-col space-y-3">
                 <div>
         <p>Enter The access code you received From productFinder</p>
         <p>If you did not receive it please check your spam folder or contact Us</p>
      </div>
               <div
                  class="flex items-center bg-white border border-gray-100 rounded px-2"
               >

                  <input
                     type="text"
                     placeholder="Access Code"
                     class="w-full py-2 px-1 placeholder-indigo-400 outline-none placeholder-opacity-50"
                     autocomplete="off"
                     v-model="accessCode"
                  />
               </div>
               <span
               @click="onEvaluate"
                  class="text-white bg-indigo-500 px-4 py-2 rounded"
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