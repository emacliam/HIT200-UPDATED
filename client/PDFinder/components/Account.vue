<template>
    <main>
        <div class="my-4 fixed hidden md:block h1">
      <div class="bg-white rounded overflow-hidden shadow-lg">
        <div class="text-center p-6  border-b">
          <img
            class="h-24 w-24 rounded-full mx-auto border p-1 border-teal-600"
            :src="$auth.$state.user.Blogo"
            :alt="$auth.$state.user.Bname"
          />
          <p class="pt-2 text-lg font-semibold">{{$auth.$state.user.Fname}}{{$auth.$state.user.Lname}}</p>
          <p class="text-md text-gray-600">{{$auth.$state.user.Email}}</p>
          <div class="mt-5">
                <!-- component -->
<div class="flex  flex-col w-auto items-center justify-center bg-grey-lighter">
    <label class="w-auto flex flex-col items-center rounded-md uppercase border border-blue cursor-pointer">
        <span class=" text-sm leading-normal w-auto px-2">edit logo</span>
        <input type='file' class="hidden" @change="onFileSelected"/>
    </label>
</div>

          </div>
        </div>
        <div class="border-b">
          <nuxt-link to="/LocationSet" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-teal-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-md font-medium text-teal-500 leading-none">Location settings</p>
              <p class="text-xs text-gray-500">Add/Remove Location</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/BusinessAccSet" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-teal-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-md font-medium text-teal-500 leading-none">Business settings</p>
              <p class="text-xs text-gray-500">Billing,Edit/Remove Business Settings</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/PersonalAccSet" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-teal-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-md font-medium text-teal-500 leading-none">Personal settings</p>
              <p class="text-xs text-gray-500">Email, profile, etc</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/SocialAccSet" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-green-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-md font-medium text-teal-500 leading-none">
                Integrations
              </p>
              <p class="text-xs text-gray-500">Social media details, Websites</p>
            </div>
          </nuxt-link>
        </div>

        <div class="">

          <nuxt-link to="/" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-md font-medium text-teal-500 leading-none">Support FAQ</p>
          </nuxt-link>
          <div class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p @click="onLogout" class="text-md font-medium text-teal-500 leading-none cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
    </div>


    </main>
</template>

<script>
export default {
  methods: {
    async onLogout(){
      await this.$auth.logout()
      }
},
data() {
  return {
      selectedFile:"",
       fileName:'',
  }
},
methods:{
      async  onFileSelected(){
        this.$nuxt.$loading.start()
        try {
          this.selectedFile = event.target.files[0];
        this.fileName = event.target.files[0].name;
          let data = new FormData();
        data.append("Blogo",this.selectedFile, this.selectedFile.name);

        let response = await this.$axios.$put('/api/auth/user/logo', data)
        if(response.success){
          await this.$auth.fetchUser();
          this.$nuxt.$loading.finish()
          this.$toast.success('successfully uploaded').goAway(4000);
        }else{
          this.$nuxt.$loading.finish()
          this.$toast.error('something happened failed to upload').goAway(4000);
        }
        } catch (err) {
          console.log(err)

        }

      },
     async onLogout(){
 await this.$auth.logout()
      }
    }
}
</script>
<style scoped>
</style>