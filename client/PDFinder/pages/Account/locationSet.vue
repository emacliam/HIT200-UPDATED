<template>
    <main class="bg-gray-200 min-h-screen flex">
        <Account/>
            <div class="container ml-56 border border-2">
            <div class="inputs w-full max-w-4xl p-6 mx-auto border border-2 flex justify-between">

                <form class=" input  w-full">
                     <h2 class="text-2xl text-gray-900 mb-6 border-b border-gray-400">Account Setting</h2>
                    <div class='flex flex-wrap mb-6'>
                        <div class='w-full md:w-full mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Country</label>
                            <div class="flex-shrink w-full inline-block">
                               <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded placeholder-black"
                            >
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

                              <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Address line 1</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none font-medium focus:border-gray-500 placeholder-black' id='grid-text-1' type='text'
                            :placeholder="account.Aline1"
                            v-model="Aline1"
                            >
                        </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Address line 2</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none font-medium focus:border-gray-500 placeholder-black' type='text'
                                :placeholder="account.Aline2"
                                v-model="Aline2"
                                >
                            </div>
                             <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>State/Province</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none font-medium focus:border-gray-500 placeholder-black' type='text'
                                :placeholder="account.State"
                                v-model="State"
                                >
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >City</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none font-medium focus:border-gray-500 placeholder-black' type='text'
                                    :placeholder="account.City"
                                    v-model="City"
                                    >
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Zipcode</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  font-medium focus:border-gray-500 placeholder-black' type='text'
                                    :placeholder="account.Zipcode"
                                    v-model="Zipcode"
                                    >
                                </div>
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Address Description</label>
                                <textarea class='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium focus:outline-none focus:bg-white placeholder-black'
                                :placeholder="account.Adescription"
                                v-model="Adescription"
                                ></textarea>
                            </div>
                            <div class="flex justify-end">
                                <span class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3 cursor-pointer" @click="send">save changes</span>
                            </div>
                            <hr>

                    </div>

                </form>
                   <div class="w-full flex-grow map">
                               <Map/>
                    </div>
            </div>
        </div>

    </main>
</template>
<script>
import Account from "~/components/Account";
import Map from "~/components/map";

export default {
      components: {
    Account,
    Map
  },
    async asyncData({ $axios , params}){
        let response = await $axios.$get('/api/auth/user');
        console.log(response);
        return{
            account:response.user
        }

    }, data() {
    return {
           canBeShown: false,
    Aline1:"" ,
    Aline2:"" ,
    State:"" ,
    Zipcode:"" ,
    City:"" ,
    Adescription:"" ,
    };
  },
    created () {
    setInterval(() => {
      this.canBeShown = !this.canBeShown
    }, 5000)
  },
  methods: {
    async send() {
       this.$nuxt.$loading.start()
    let data = {
    Aline1:this.Aline1,
    Aline2:this.Aline2,
    State:this.State,
    Zipcode:this.Zipcode,
    City:this.City,
    Adescription:this.Adescription
    }
  let response = await this.$axios.$put("/api/auth/user", data);
    console.log(response);
    if(response.success){
      await this.$auth.fetchUser();
       this.$nuxt.$loading.finish()
      this.$toast.success('Changes saved').goAway(2000);

    }else{
       this.$nuxt.$loading.finish()
        this.$toast.error("something went wrong").goAway(2000);
    }

    },
      dialogEvent (eventName) {
      console.log('Dialog event: ' + eventName)
    }
  }

}
</script>
<style scoped>

.input{
  width:30rem;
}

</style>