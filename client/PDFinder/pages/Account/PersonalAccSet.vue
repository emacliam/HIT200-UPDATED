<template>
    <main class="bg-gray-200 min-h-screen flex">
        <Account/>
          <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">Account Setting</h2>
                <form class="mt-6 border-t border-gray-400 pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                          <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' type='text' :placeholder="account.Fname"   v-model="Fname">
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' type='text' :placeholder="account.Lname" v-model="Lname">
                                </div>
                            </div>
                              <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Username</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' :placeholder='account.Username'  v-model="Username">
                        </div>
                         <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' :placeholder='account.Email'  v-model="Email">
                        </div>

                         <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>change password</label>
                            <input :type="show ? 'password' : 'text'"  class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight placeholder-black font-medium focus:outline-none  focus:border-gray-500' id='grid-text-1' v-model="Password">
                            <span class="text-teal-600 cursor-pointer hover:underline" title="show your password" @click="show=!show">Show</span>
                        </div>
                            <div class="flex justify-end">
                                <span type="password" class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 cursor-pointer" @click="send">save changes</span>
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
     async asyncData({ $axios , params}){
        let response = await $axios.$get('/api/auth/user');
        return{
            account:response.user
        }

    }, data() {
    return {
    Fname:"" ,
    Lname:"" ,
    Username:"" ,
    Email:"",
    Password:"",
    show:false,
    };
  },
  methods: {
    async send() {
    this.$nuxt.$loading.start()
    console.log(this.selectedFile)
    let data = {
    Fname:this.Fname,
    Lname:this.Lname,
    Username:this.Username,
    Email:this.Email,
    Password:this.Password,
    }
  let response = await this.$axios.$put("/api/auth/user", data);
    console.log(response);
    if(response.success){
      this.$nuxt.$loading.finish()
      await this.$auth.fetchUser();
      this.$toast.success('Changes saved').goAway(2000);

    }else{
        this.$nuxt.$loading.finish()
        this.$toast.error("something went wrong").goAway(2000);
    }

    }
  }

}
</script>