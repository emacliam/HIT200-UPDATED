<template>
<main>
    <div class="text-center bg-blue-200 pt-24">
        <h1 class="font-bold">Apply to Sell on ProductFinder Marketplace</h1>
        <h2 class="italic">Becoming a ProductFinder Seller is easy</h2>
        <h2 class="italic">Simply complete the form and and we'll be in touch within -10 business days </h2>
        <h2 class="italic">We use your the email and phoneNumbers you are going to provide to get in touch with you</h2>
        <form class="pb-16 bg-white border rounded-lg w-2/4 m-auto shadow-lg z-50">
            <!-- first section -->
            <div>
                <h1 class="font-bold">How can we get in touch?</h1>
            <div class=" p-2 m-1">
               <label for="FirstName">First Name</label>
               <br>
               <input type="text" name="FirstName" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="FirstName">
           </div>
               <div class=" p-2 m-1">
               <label for="LastName">Last Name</label>
               <br>
               <input type="text" name="LastName" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="LastName">
           </div>
               <div class=" p-2 m-1">
               <label for="Email">Email</label>
               <br>
               <input type="text" name="Email" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="Email">
           </div>
               <div class=" p-2 m-1">
               <label for="PhoneNumber">Telephone Number <p class="text-gray-500">(Optional)</p></label>
               <br>
               <input type="tel" name="PhoneNumber" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="PhoneNumber">
           </div>
               <div class=" p-2 m-1">
               <label for="MobileNumber">Mobile Number</label>
               <p>Hint: +263 784675999 or +263 0784675999</p>
               <br>

               <div>
                   <label>Select country code</label>
                   <br>
                   <select name="callingCodes" id=""  v-model="CallingCodes">
                       <option v-for="country in countries" :key="country" :value="country.callingCodes[0]">+{{country.callingCodes[0]}}
                       </option>
                   </select>
               </div>
               <input type="phone" name="MobileNumber" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="MobileNumber">
           </div>
            </div>
            <!-- Second section -->
            <div>
                  <h1 class="font-bold">Tell us about your business</h1>
                <div class=" p-2 m-1">
                    <label for="CompanyName">Company Name</label>
                    <br>
                    <input type="text" name="CompanyName" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="CompanyName">
                </div>
                 <div class=" p-2 m-1">
                    <label for="Category">Category</label>
                    <p>Eg.Beauty,Books etc</p>
                    <br>
                    <input type="text" name="Category" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="Category">
                </div>
                 <div class=" p-2 m-1">
                     <p class="text-gray-500">If have more than one seperate with a "/"</p>
                    <label for="SocialMedia">Social Media</label>
                    <br>
                    <textarea name="SocialMedia" id="" cols="30" rows="10" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-24 w-2/4 pl-2 bg-gray-200" v-model="SocialMedia"></textarea>
                </div>
                 <div class=" p-2 m-1">
                    <label for="VATRegistered">Are you VAT registered?</label>
                    <br>
                    <select name="VATRegistered" id="" v-model="VATRegistered">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                 <div class=" p-2 m-1">
                    <label for="MonthlyRevenue">Monthly Revenue</label>
                    <br>
                    <select name="MonthlyRevenue" id="" v-model="MonthlyRevenue">
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
            <!-- section three -->
            <div>
                  <h1 class="font-bold">Business Owner / Director Details</h1>
                <div class=" p-2 m-1">
                    <label for="BusinessOwnerFName">Business Owner First Name</label>
                    <br>
                    <input type="text" name="BusinessOwnerFName" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="BusinessOwnerFName">
                </div>
                 <div class=" p-2 m-1">
                    <label for="BusinessOwnerLName">Business Owner Last Name</label>
                    <br>
                    <input type="text" name="BusinessOwnerLName" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="BusinessOwnerLName">
                </div>
                 <div class=" p-2 m-1">
                    <label for="BusinessOwnerEmail">Business Owner Email Address</label>
                    <br>
                    <input type="text" name="BusinessOwnerEmail" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="BusinessOwnerEmail">
                </div>
            </div>
            <!-- section four -->
            <div>
                  <h1 class="font-bold">Tell us about your products</h1>
                <div class=" p-2 m-1">
                    <label for="ProductsInfo">Number of Unique Products</label>
                    <br>
                    <input type="text" name="ProductsInfo" id="" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-8 w-2/4 pl-2 bg-gray-200" v-model="ProductsInfo">
                </div>
                <div class=" p-2 m-1">
                    <label for="TypeofBrands">What brands or products do you carry</label>
                    <br>
                    <textarea name="TypeofBrands" id="" cols="30" rows="10" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-24 w-2/4 pl-2 bg-gray-200" v-model="TypeofBrands"></textarea>
                </div>
                <div class=" p-2 m-1">
                    <label for="StockQn">Do you carry stock?</label>
                    <br>
                    <select name="StockQn" id="" v-model="StockQn">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div class=" p-2 m-1">
                    <label for="PhysicalStoreQn">Do you have a physical store?<p class="text-gray-500">(Optional)</p></label>
                    <br>
                    <select name="PhysicalStoreQn" id="" v-model="PhysicalStoreQn">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div class=" p-2 m-1">
                    <label for="SupplierQn">Are you a supplier to retail outlets<p class="text-gray-500">(Optional)</p></label>
                    <br>
                    <select name="SupplierQn" id="" v-model="SupplierQn">
                        <option value="">---</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                 <div class=" p-2 m-1">
                    <label for="AdditionalInfo">Do you have any additional comments?</label>
                    <br>
                    <textarea name="AdditionalInfo" id="" cols="30" rows="10" class="border-b-2 border-gray-700 focus:border-blue-500 focus:bg-white h-24 w-2/4 pl-2 bg-gray-200" v-model="AdditionalInfo"></textarea>
                </div>
            </div>

            <!-- buttons -->
            <div>
                <span @click="onApply" class="rounded-full px-4 py-1 border bg-blue-500 w-48 border-gray-600 ">Apply</span>
                <nuxt-link to="/" class="rounded-full px-4 py-1 border bg-blue-200 w-48 border-gray-600 ">Cancel</nuxt-link>

            </div>

        </form>
    </div>
</main>

</template>
<script>
export default {
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