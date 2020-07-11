<template>
    <main class="bg-gray-200 min-h-screen flex">
        <Account/>
         <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">Social Settings</h2>
                <form class="mt-6 border-t border-gray-400 pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label type="email" class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Extra email address 1 (optional)</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' :placeholder='social.Email1' v-model="Email1">
                        </div>
                         <div class='w-full md:w-full px-3 mb-6'>
                            <label type="email" class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Extra email address 2 (optional)</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' :placeholder='social.Email2' v-model="Email2" >
                        </div>
                        <div class='w-full md:w-full px-3 mb-6 '>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Facebook Link (optional)</label>
                             <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text'  :placeholder='social.Facebook' v-model="Facebook">
                        </div>
                          <div class='w-full md:w-full px-3 mb-6 '>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Twitter Link (optional)</label>
                           <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text'  :placeholder='social.Twitter' v-model="Twitter">
                        </div>
                          <div class='w-full md:w-full px-3 mb-6 '>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Whatsapp Number (optional)</label>
                           <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' :placeholder='social.Whatsapp' v-model="Whatsapp">
                        </div>
                         <div class='w-full md:w-full px-3 mb-6 '>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Extra Phone Number</label>
                           <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text'  :placeholder='social.Phone' v-model="Phone">
                        </div>
                        <div class='w-full md:w-full px-3 mb-6 '>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Any Other Links and Number(eg /Whatsapp=078.../Cell=078.../)</label>
                            <textarea name="" class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' cols="30" rows="10" :placeholder='social.Other' v-model="Other"></textarea>
                        </div>
                            <div class="flex justify-end">
                                <span class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 cursor-pointer" @click="send">save changes</span>
                            </div>
                    </div>
                </form>
            </div>

    </main>
</template>
<script>
import Account from "~/components/Account";
export default {
    components:{
Account

    },
    data() {
        return {
            Email1:"",
            Email2:"",
            Facebook:"",
            Twitter:"",
            Whatsapp:"",
            Phone:"",
            Other:""
        }
    },
async asyncData({ $axios }){
    let response = await $axios.$get('/api/auth/user');
    return {
        social:response.user
    }

},
methods: {
    async send(){
         this.$nuxt.$loading.start()
        let data = {
        Email1:this.Email1,
        Email2:this.Email2,
        Facebook:this.Facebook,
        Twitter:this.Twitter,
        Whatsapp:this.Whatsapp,
        Phone:this.Phone,
        Other:this.Other
    }
 let response = await this.$axios.$put('/api/auth/user',data)
 if(response.success){
   this.$nuxt.$loading.finish()
   await this.$auth.fetchUser();
   this.$toast.success('Social details saved').goAway(2000);
 }else{
    this.$nuxt.$loading.finish()
    this.$toast.error('Something happened try again later ').goAway(2000)
 }
    }
},
}
</script>