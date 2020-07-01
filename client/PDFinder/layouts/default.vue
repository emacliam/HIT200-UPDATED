<template>
<main>
<div class="h-full w-full flex overflow-hidden antialiased text-gray-800 bg-white h-screen">
  <!-- section body side nav -->
  <nav aria-label="side bar" aria-orientation="vertical" class="flex-none flex flex-col items-center text-center bg-teal-900 text-gray-400 border-r">
    <div class="h-16 flex items-center w-full">
      <img class="h-6 w-6 mx-auto" src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/leaves.png" />
    </div>

    <ul>
      <li>
        <nuxt-link title="Home" to="/home" class="h-16 px-6 flex items-center hover:text-white w-full" :class="$nuxt.$route.name === 'home' ? 'bg-teal-700' : ''">
          <i class="mx-auto">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
            </svg>
          </i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link title="Comments&Reviews" to="/Reviews" class="h-16 px-6 flex items-center hover:text-white w-full" :class="$nuxt.$route.name === 'Reviews' ? 'bg-teal-700' : ''">
          <i class="mx-auto">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M18.546 3h-13.069l-5.477 8.986v9.014h24v-9.014l-5.454-8.986zm-3.796 12h-5.5l-2.25-3h-4.666l4.266-7h10.82l4.249 7h-4.669l-2.25 3zm-9.75-4l.607-1h12.787l.606 1h-14zm12.18-3l.607 1h-11.573l.607-1h10.359zm-1.214-2l.606 1h-9.144l.607-1h7.931z" />
            </svg>
          </i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="Account/PersonalAccSet" title="Account"  class="h-16 px-6 flex items-center hover:text-white w-full" :class="$nuxt.$route.name === 'PersonalAccSet' ? 'bg-teal-700' : ''" >
          <i class="mx-auto">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
            </svg>
          </i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link title="Statistics" to="/Statistics" class="h-16 px-6 flex items-center hover:text-white w-full" :class="$nuxt.$route.name === 'Statistics' ? 'bg-teal-700' : ''">
          <i class="mx-auto">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
            </svg>
          </i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link title="Settings" to="/Settings" class="h-16 px-6 flex items-center hover:text-white w-full" :class="$nuxt.$route.name === 'Settings' ? 'bg-teal-700' : ''">
          <i class="mx-auto">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
            </svg>
          </i>
        </nuxt-link>
      </li>
    </ul>

    <div class="mt-auto h-16 flex items-center w-full p-1">
    <a href="#" @click="onLogout" class="bg-teal-800 h-8 p-1 rounded text-white w-full hover:bg-red-800" style="text-decoration:none">Logout</a>
    </div>
  </nav>

  <div class="flex-1 flex flex-col">
    <!-- section body top nav -->
    <nav aria-label="top bar" class="flex-none flex justify-between bg-white h-16">
      <!-- top bar left -->
      <ul aria-label="top bar left" aria-orientation="horizontal" class="flex">
        <!-- add button -->
        <li class="group relative">
          <button aria-controls="add" aria-expanded="false" aria-haspopup="listbox" class="flex items-center h-full px-4 text-sm">
            <i>
              <svg class="fill-current w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-2v10h-10v2h10v10h2v-10h10z" />
              </svg>
            </i>
            <span class="ml-2">Add</span>
          </button>
          <span class="absolute p-1 hidden group-hover:block">
            <ul id="add" role="listbox" class="outline-none py-2 bg-white border rounded-md w-screen max-w-md w-dropdown-large shadow-lg focus:outline-none leading-relaxed">
              <li role="option" class="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer">
                <nuxt-link to="/products/add" class="w-56 px-12">
                              Products
                </nuxt-link>

              </li>
            </ul>
          </span>
        </li>
      </ul>

      <!-- to bar right  -->
      <ul aria-label="top bar right" aria-orientation="horizontal" class="px-8 flex items-center">
        <li class="relative">
          <input title="Search Bar" aria-label="search bar" role="search" class="pr-8 pl-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:border-black focus:cursor-text w-4 focus:w-64 placeholder-transparent focus:placeholder-gray-500" type="text" placeholder="Search ProductFinder Support" />
          <i class="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
            <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </i>
        </li>

        <li class="h-8 w-8 ml-3">
          <button title="Notifications" aria-label="notifications" class="w-full h-full text-white rounded-md focus:outline-none focus:shadow-outline">
            <nuxt-link to="/Notifications" class="">
                 <i class="text-gray-600">
              <svg class="fill-current w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
              </svg>
            </i>
            </nuxt-link>
          </button>
        </li>

        <li class="h-8 w-8 ml-3">
          <button title="Products" aria-label="products" class="w-full h-full rounded-md focus:outline-none focus:shadow-outline">
            <nuxt-link to="/products">
            <i class="text-gray-600">
              <svg class="fill-current w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z" />
              </svg>
            </i>
            </nuxt-link>

          </button>
        </li>

        <li class="h-10 w-10 ml-3">
          <button :title="$auth.$state.user.Email" aria-label="page menu" class="h-full w-full rounded-full border focus:outline-none focus:shadow-outline">
            <img class="h-full w-full rounded-full mx-auto border-2 border-blue-600" :src="$auth.$state.user.Blogo" />
          </button>
        </li>
      </ul>
    </nav>

    <!-- section body header -->
    <header aria-label="page caption" class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
      <h1 v-if="$nuxt.$route.name == 'home'" id="page-caption" class="font-semibold text-lg">Dashboard</h1>
      <h1 v-if="$nuxt.$route.path == '/Account/SocialAccSet'"  id="page-caption" class="font-semibold text-lg">Account > Social settings</h1>
      <h1 v-if="$nuxt.$route.path == '/Account/BusinessAccSet'"  id="page-caption" class="font-semibold text-lg">Account > Business settings</h1>
      <h1 v-if="$nuxt.$route.path == '/Account/LocationSet'"  id="page-caption" class="font-semibold text-lg">Account > Location settings</h1>
      <h1 v-if="$nuxt.$route.path == '/Account/PersonalAccSet'"  id="page-caption" class="font-semibold text-lg">Account > Personal settings</h1>
      <h1 v-if="$nuxt.$route.name == 'Settings'"  id="page-caption" class="font-semibold text-lg">Settings</h1>
      <h1 v-if="$nuxt.$route.name == 'Statistics'"  id="page-caption" class="font-semibold text-lg">Statistics</h1>
      <h1 v-if="$nuxt.$route.name == 'Reviews'"  id="page-caption" class="font-semibold text-lg">Reviews and Comments</h1>
        <h1 v-if="$nuxt.$route.path == '/products/add'"  id="page-caption" class="font-semibold text-lg">Products > Add</h1>
        <h1 v-if="$nuxt.$route.path == '/products'"  id="page-caption" class="font-semibold text-lg">Products</h1>
         <h1 v-if="$nuxt.$route.path.slice(0,14) == '/products/Edit'"  id="page-caption" class="font-semibold text-lg">Edit Product</h1>
    </header>

    <!-- main content -->
    <main class=" h-screen overflow-auto">
          <nuxt/>
    </main>
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
}
</script>
<style scoped>
      /* can be configured in tailwind.config.js */
      .group:hover .group-hover\:block {
        display: block;
      }

      .focus\:cursor-text:focus {
        cursor: text;
      }

      .focus\:w-64:focus {
        width: 16rem;
      }

      /* zendesk styles */
      .h-16 {
        height: 50px;
      }
      .bg-teal-900 {
        background: #03363d;
      }
      .bg-gray-100 {
        background: #f8f9f9;

      }
      .hover\:border-green-500:hover {
        border-color: #78a300;
      }

</style>