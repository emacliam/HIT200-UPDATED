<template>
<main>
<!-- component -->
<div class="text-white mt-0 border border-blue-800 py-0 w-full h-full bg-blue-700"  style="background-image:url('https://demos.onepagelove.com/html/leno/images/header-background.jpg')">
    <header class="flex md:justify-between p-8">
        <div class="flex align-items-center">
            <svg class="sm:w-12 w-10 inline mr-3" fill="#00c9db" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 586.5 586.5"  xml:space="preserve"><polygon points="471.75,89.25 369.75,89.25 168.3,410.55 102,293.25 216.75,89.25 114.75,89.25 0,293.25 114.75,497.25 216.75,497.25 418.2,175.95 484.5,293.25 369.75,497.25 471.75,497.25 586.5,293.25"/></svg>
            <h1 class="inline text-white sm:text-3xl text-2xl font-bold"><a href="/">ProductFinder</a></h1>
        </div>
        <div>Wanna sell On Our Platform
          <nuxt-link to="/apply" class="px-4 rounded-full bg-blue-400 text-white font-bold p-2 uppercase border-blue-500 border">Apply Now!</nuxt-link>
        </div>
        <div class="lg:flex md:text-white hidden">
            <ul class="align-items-center pt-2">
                <li class="ml-4 p4 border bg-blue-700 rounded-md m-1 hover:bg-blue-900 text-center p-2"><a href="/login">Login</a></li>
                <li class="ml-4 p4 border bg-blue-700 rounded-md m-1 hover:bg-blue-900 text-center p-2"><a href="/access">SignUp</a></li>
                <li class="ml-4 p4 border bg-blue-700 rounded-md m-1 hover:bg-blue-900 text-center p-2"><a href="">ContactUs</a></li>
                <li class="ml-4 p4 border bg-blue-700 rounded-md m-1 hover:bg-blue-900 text-center p-2"><a href="">Help</a></li>
                <p>Reports&Requests</p>
                <li class="ml-4 p4 border bg-blue-700 rounded-md m-1 hover:bg-blue-900 text-center p-2"><a href="/report">HERE</a></li>
            </ul>
        </div>
    </header>
    <section class="px-2 lg:px-0 mt-16 sm:mt-32 flex w-full container mx-auto pb-16">
        <div class="w-full text-white flex justify-center md:justify-start text-center md:text-left">
            <div class="md:w-1/2 w-full">
                <h2 class="leading-none font-bold text-2xl xs:text-2x1 md:text-5xl lg:6x1 uppercase">Mobile app for <span class="text-blue-400">Marketers</span></h2>
                <p class="mt-12 mb-12">This Landing is one is one of the easiest and feature packed marketing automation apps in the market. Download it today Available on playstore!</p>
                <button class="px-16 rounded-full bg-blue-400 text-white font-bold p-4 uppercase border-blue-500 border">Download Now!</button>
            </div>
            <div class="md:w-1/2 md:justify-center md:flex hidden">
                <img src="https://demos.onepagelove.com/html/leno/images/header-iphone.png" alt="Mobile Phone" />
            </div>
        </div>
    </section>
    <section class="bg-gray-900 sm:py-32 py-10 text-center">
        <h4 class="text-2xl underline">Testimonies</h4>
        <h1> "This is what others are saying about our services"</h1>
        <div class="container mx-auto sm:flex-row flex-col flex ">
            <div class="sm:w-1/3 w-full sm:mb-0 mb-16">
                <img src="https://demos.onepagelove.com/html/leno/images/testimonial-1.jpg" class="rounded-full w-24 h-24 mx-auto mb-2">
                <p class="italic text-gray-500 text-center my-3">This is a great platform for marketing.Made 300 + sells by using this website.</p>
                <p class="font-bold  text-gray-400 text-center text-xl">Sandy Grain - Enterprenuer</p>
            </div>
            <div class="sm:w-1/3 w-full sm:mb-0 mb-16">
                <img src="https://demos.onepagelove.com/html/leno/images/testimonial-2.jpg" class="rounded-full w-24 h-24 mx-auto mb-2">
                <p class="italic text-gray-500 text-center my-3">Wonderfull Platform!</p>
                <p class="font-bold  text-gray-400 text-center text-xl">Bruce Cashman - Retailer</p>
            </div>
            <div class="sm:w-1/3 w-full sm:mb-0 mb-16">
                <img src="https://demos.onepagelove.com/html/leno/images/testimonial-3.jpg" class="rounded-full w-24 h-24 mx-auto mb-2">
                <p class="italic text-gray-500 text-center my-3"></p>
                <p class="font-bold  text-gray-400 text-center text-xl">Amanda Savage - </p>
            </div>
        </div>
    </section>
    <section class="bg-gray-800 py-32">
        <div class="container mx-auto">
            <h1 class="text-5xl font-bold uppercase text-center text-gray-300">Features</h1>
            <div class="flex justify-center">
                <ul>
                    <li>Quality Advertisement</li>
                    <li>Quality Advertisement</li>
                    <li>Quality Advertisement</li>
                    <li>Quality Advertisement</li>
                    <li>Quality Advertisement</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="bg-gray-900 h-auto w-full text-center">
        <div class="text-2xl font-bold">Famous Stores Using Our Platform</div>
        <div class="flex justify-center w-full pt-4">
        <img class="m-2 w-24 h-10 rounded-lg" title="OK SUPERMARKET" src="/OK.png" alt="OK">
        <img class="m-2 w-24 h-10 rounded-lg" title="SPAR SUPERMARKET" src="/SPAR.png" alt="SPAR">
        <img class="m-2 w-24 h-10 rounded-lg" title="TM SUPERMARKET" src="/TM.png" alt="TM">
        </div>
    </section>
    <footer class="p-2">
        <h1 class="h-auto w-auto">ProductFinder.inc <span class="rounded-full border border-white px-1">C</span> </h1>
    </footer>
</div>
</main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
     layout:"none",
  components: {
    Logo
  }
}
</script>

<style>


</style>
