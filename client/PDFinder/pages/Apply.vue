<template>
<main>
    <div class="text-center bg-teal-50 pt-24 pb-4">
        <div class="uppercase text-teal-600 text-center rounded bg-white m-auto w-2/4 p-1 mb-1">
        <h1 class="font-bold">Apply to Sell on ProductFinder Marketplace</h1>
        <h2 class="italic">Becoming a ProductFinder Seller is easy</h2>
        <h2 class="italic">Simply complete the form and and we'll be in touch within -10 business days </h2>
        <h2 class="italic">We use the email and phoneNumbers you are going to provide to get in touch with you</h2>
        </div>

        <form class="pb-16 bg-white border rounded-lg w-2/4 m-auto shadow-lg z-50">
            <!-- first section -->
            <div class="px-48 py-8">
                <h1 class="font-bold underline mb-4">How can we get in touch?</h1>
                <div class="my-6">
                       <label for="FirstName" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">FirstName</label>
     <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


               <input type="text" name="FirstName" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="FirstName">
           </div>
                </div>

           <div class="my-6">
                <label for="LastName" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">LastName</label>
                <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">

               <input type="text" name="LastName" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="LastName">
           </div>
           </div>

  <div class="my-6">
       <label for="Email" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Email</label>
  <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


               <input type="text" name="Email" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="Email">
           </div>
  </div>

<div class="my-6">
     <label for="PhoneNumber" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3 w-auto">Telephone Number <p class="text-gray-500">(Optional)</p></label>
    <div class="bg-white p-1 flex border border-gray-500 rounded svelte-1l8159u">


               <input type="tel" name="PhoneNumber" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="PhoneNumber">
           </div>
</div>

<div class="w-3/4 m-auto">
        <label for="MobileNumber" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3 w-auto">Mobile Number</label>
               <p class="font-bold text-gray-600 text-xs leading-8">(Hint: +263 784675999 or +263 0784675999)</p>

      <div class="bg-white p-1 flex border border-gray-500 rounded svelte-1l8159u">


               <div class="flex">


                   <select name="callingCodes" id=""  v-model="CallingCodes" class="rounded">
                       <option v-for="country in countries" :key="country.name" :value="country.callingCodes[0]">+{{country.callingCodes[0]}}
                       </option>
                   </select>
                      <input type="phone" name="MobileNumber" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="MobileNumber">
               </div>

           </div>

</div>


            </div>
            <!-- Second section -->
            <div class="px-48 py-8">
                  <h1 class="font-bold underline mb-4">Tell us about your business</h1>
                  <div class="my-6">
                       <label for="CompanyName" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Company Name</label>
                   <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


                    <input type="text" name="CompanyName" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="CompanyName">
                </div>
                  </div>
<div class="my-6">
     <label for="Category" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Category</label>
                    <p class="text-gray-500">Eg.Beauty,Books etc</p>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">

                    <input type="text" name="Category" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="Category">
                </div>
</div>

                <div class="my-6">

                    <label for="SocialMedia" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Social Media</label>
                      <p class="text-gray-500">If have more than one seperate with a "/"</p>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


                    <textarea name="SocialMedia" id="" cols="30" rows="3" class="bp-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="SocialMedia"></textarea>
                </div>
                </div>
                <div class="my-6">
                     <label for="VATRegistered" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Are you VAT registered?</label>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">
                    <select name="VATRegistered" id="" v-model="VATRegistered" class="w-full rounded">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                </div>

<div class="my-6">
        <label for="MonthlyRevenue" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Monthly Revenue</label>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">
                    <select name="MonthlyRevenue" id="" v-model="MonthlyRevenue" class="w-full rounded">
                        <option value="">---</option>
                        <option value="Startup">FirstTime selling</option>
                        <option value="lessthan20K">Less than 20k</option>
                        <option value="20k-50k">20k-50k</option>
                        <option value="50k-100k">50k-100k</option>
                        <option value="100k-500k">100k-500k</option>
                        <option value="More than 500k">More than 500k</option>
                    </select>
                </div>
</div>

            </div>
            <!-- section three -->
            <div class="px-48 py-8">
                  <h1 class="font-bold underline mb-4">Business Owner / Director Details</h1>
                  <div class="my-6">
                       <label for="BusinessOwnerFName" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Business Owner First Name</label>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


                    <input type="text" name="BusinessOwnerFName" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="BusinessOwnerFName">
                </div>
                  </div>

               <div class="my-6">
                   <label for="BusinessOwnerLName" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Business Owner Last Name</label>
  <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


                    <input type="text" name="BusinessOwnerLName" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="BusinessOwnerLName">
                </div>
               </div>

               <div class="my-6">
                    <label for="BusinessOwnerEmail" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Business Owner Email Address</label>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


                    <input type="text" name="BusinessOwnerEmail" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="BusinessOwnerEmail">
                </div>
               </div>

            </div>
            <!-- section four -->
            <div class="px-48 py-8">
                  <h1 class="font-bold underline mb-4">Tell us about your products</h1>
                  <div class="my-6">
                        <label for="ProductsInfo" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Number of Unique Products</label>
     <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


                    <input type="text" name="ProductsInfo" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="ProductsInfo">
                </div>
                  </div>

           <div class="my-6">
                  <label for="TypeofBrands" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">What brands or products do you carry</label>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">

                    <br>
                    <textarea name="TypeofBrands" id="" cols="30" rows="3" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="TypeofBrands"></textarea>
                </div>
           </div>

<div class="my-6">
        <label for="StockQn" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Do you carry stock?</label>
  <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">

                    <br>
                    <select name="StockQn" id="" v-model="StockQn" class="w-full rounded">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
</div>

<div class="my-6">
    <label for="PhysicalStoreQn" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Do you have a physical store?(Optional)</label>
  <div class="bg-white p-1 flex border border-gray-500 rounded svelte-1l8159u">

                    <br>
                    <select name="PhysicalStoreQn" id="" v-model="PhysicalStoreQn" class="w-full rounded">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
</div>

              <div class="my-6">
                  <label for="SupplierQn"  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Are you a supplier to retail outlets(Optional)</label>
  <div class="bg-white p-1 flex border border-gray-500 rounded svelte-1l8159u">

                    <br>
                    <select name="SupplierQn" id="" v-model="SupplierQn" class="w-full rounded">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
              </div>

              <div class="my-6">
                   <label for="AdditionalInfo" class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Do you have any additional comments?</label>
 <div class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u">


                    <textarea name="AdditionalInfo" id="" cols="30" rows="3" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="AdditionalInfo"></textarea>
                </div>
              </div>

            </div>

            <!-- buttons -->
            <div class="px-32">
                <span @click="onApply"  class=" m-2 text-base hover:text-white ml-2 focus:outline-none flex justify-center px-48 py-2 rounded font-bold cursor-pointer hover:bg-black bg-teal-600">Apply</span>
                <nuxt-link to="/"       class=" m-2 text-base hover:text-white ml-2 focus:outline-none flex justify-center px-48 py-2 rounded font-bold cursor-pointer hover:bg-black bg-teal-600">Cancel</nuxt-link>

            </div>

        </form>
    </div>
</main>

</template>
<script>
export default {
     layout:"none",
    async asyncData({ $axios }){
        try {
            const countries = await $axios.$get('/api/countries');
            return{
                countries: countries
            }
        } catch (error) {

        }
    },
    data() {
        return {
            FirstName:"",
            LastName:"",
            Email:"",
            PhoneNumber:"",
            MobileNumber:"",
            CompanyName:"",
            Category:"",
            SocialMedia:"",
            VATRegistered:"",
            MonthlyRevenue:"",
            BusinessOwnerFName:"",
            BusinessOwnerLName:"",
            BusinessOwnerEmail:"",
            ProductsInfo:"",
            TypeofBrands:"",
            StockQn:"",
            PhysicalStoreQn:"",
            SupplierQn:"",
            AdditionalInfo:"",
            CallingCodes:""
        }
    },
    methods: {
     async onApply(){
            try {
                   let data = {
            FirstName:this.FirstName,
            LastName:this.LastName,
            Email:this.Email,
            PhoneNumber:this.PhoneNumber,
            MobileNumber:"+" + this.CallingCodes + this.MobileNumber,
            CompanyName:this.CompanyName,
            Category:this.Category,
            SocialMedia:this.SocialMedia,
            VATRegistered:this.VATRegistered,
            MonthlyRevenue:this.MonthlyRevenue,
            BusinessOwnerFName:this.BusinessOwnerFName,
            BusinessOwnerLName:this.BusinessOwnerLName,
            BusinessOwnerEmail:this.BusinessOwnerEmail,
            ProductsInfo:this.ProductsInfo,
            TypeofBrands:this.TypeofBrands,
            StockQn:this.StockQn,
            PhysicalStoreQn:this.PhysicalStoreQn,
            SupplierQn:this.SupplierQn,
            AdditionalInfo:this.AdditionalInfo,
            }
            console.log(data)
//add uuid to the server so that when one apply twice, we reject
            let response = await this.$axios.$post('/api/apply',data);
            console.log(response)
            if(response.success){
               await setTimeout(() => {
                    this.$toast.success('Application send').goAway(1000)
                }, 100);
                this.$router.push('/')

            }
            } catch (err) {
                console.log(err)
               await setTimeout(() => {
                    this.$toast.error("Failed for some reason try again later").goAway(1000)
                }, 100);

            }


        }
    },
    onCancel(){
        this.$router.push('/')
    }
    }
</script>