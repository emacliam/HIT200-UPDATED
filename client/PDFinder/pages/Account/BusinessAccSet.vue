<template>
    <main class="bg-gray-200 min-h-screen flex">
        <Account/>
             <div class="container mx-auto">
            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">Account Setting</h2>
                <form class="mt-6 border-t border-gray-400 pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>business type</label>
                            <div class="flex-shrink w-full inline-block">
                               <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded placeholder-black"
                                v-model="Btype">
                                    <option>choose ...</option>
                                    <option value="Solo">Solo</option>
                                    <option value="Company">Company</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                           <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >business name</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none font-medium focus:border-gray-500 placeholder-black' type='text'
                                    :placeholder="account.Bname"
                                    v-model="Bname"
                                    >
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Business category</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  font-medium focus:border-gray-500 placeholder-black' type='text'
                                    :placeholder="account.Bcategory"
                                    v-model="Bcategory"
                                    >
                                </div>
                            </div>
                              <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Business email address</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none font-medium focus:border-gray-500 placeholder-black' id='grid-text-1' type='text'
                            :placeholder="account.Bemail"
                            v-model="Bemail"
                            >
                        </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>business phone</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none font-medium focus:border-gray-500 placeholder-black' type='text'
                                :placeholder="account.Bphone"
                                v-model="Bphone"
                                >
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Business Description</label>
                                <textarea class='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium focus:outline-none focus:bg-white placeholder-black'
                                :placeholder="account.Bdescription"
                                v-model="Bdescription"
                                ></textarea>
                            </div>
                            <div class="flex justify-end">
                                <span class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 cursor-pointer" @click="send">save changes</span>
                            </div>
                    </div>
                </form>
            </div>
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
    Bname:"" ,
    Bcategory:"" ,
    Bemail:"" ,
    Bphone:"" ,
    Btype:"" ,
    Bdescription:"" ,
    };
  },
  methods: {
    async send() {
    console.log(this.selectedFile)
    let data = {
    Bname:this.Bname,
    Bcategory:this.Bcategory,
    Bemail:this.Bemail,
    Bphone:this.Bphone,
    Btype:this.Btype,
    Bdescription:this.Bdescription
    }
  let response = await this.$axios.$put("/api/auth/user", data);
    console.log(response);
    if(response.success){
      await this.$auth.fetchUser();
      this.$toast.success('Changes saved').goAway(1000);

    }else{
        this.$toast.error("something went wrong").goAway(1000);
    }

    }
  }

}
</script>