<template>
  <main>
    <div class="container pt-5 pb-5 w-3/4 m-auto">
      <form>
        <span v-for="e in errors" :key="e">{{ e }}</span>


        <section v-if="step == 1">
         <div class="p-5">
            <Step1 />
            <div class="mt-8 p-4">
              <div>
                  <!--  1 -->
                <div class="flex flex-col md:flex-row">
                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <label  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"  >Business Name</label>
                    <br>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Business Name"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Bname"
                      />
                    </div>
                  </div>
                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                        <label  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Business Category</label>
                     <br>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Business Category"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Bcategory"
                      />
                    </div>
                  </div>
                </div>
<!--  2 -->
                <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Business PhoneNumber / Mobile Number</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="0784675999 / 267 678"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Bphone"
                      />
                    </div>
                  </div>
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Business Email Address</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="jhon@doe.com"
                        type="email"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Bemail"
                      />
                    </div>
                  </div>
                </div>
  <!--  3 -->
                     <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Business Type</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <select name="" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="form.Btype">
                          <option value="Solo">Solo</option>
                          <option value="Company">Company</option>
                          <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Company Logo(optional)</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-dotted h-24 w-48 border-gray-500 rounded svelte-1l8159u"
                    >
                       <input type="file" class="p-1 px-2 appearance-none outline-none w-full text-gray-800 text-2xl " @change="onFileSelected" />

                    </div>
                      <p>{{form.fileName}}</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>


        <section v-if="step == 2">
          <div class="p-5">
            <Step2 />
            <div class="mt-8 p-4">
              <div>
                <div
                  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"
                >Full Name</div>
                <div class="flex flex-col md:flex-row">
                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="First Name"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Fname"
                      />
                    </div>
                  </div>
                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Last Name"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Lname"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Username</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Just a hint.."
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Username"
                      />
                    </div>
                  </div>
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Your Email</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="jhon@doe.com"
                        type="email"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Email"
                      />
                    </div>
                  </div>
                </div>
                 <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Password</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                      type="passeord"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Password"
                      />
                    </div>
                  </div>
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Confirm Password</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Confirm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<!-- section 3 -->
        <section v-if="step == 3">
           <div class="p-5">
            <Step3 />
            <div class="mt-8 p-4">
              <div>
                  <!--  1 -->
                <div class="flex flex-col md:flex-row">
                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <label  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Address line 1</label>
                    <br>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Address line 1"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Aline1"
                      />
                    </div>
                  </div>
                  <div class="w-full flex-1 mx-2 svelte-1l8159u">
                        <label  class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Address line 2(optional)</label>
                     <br>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Address line 2"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                      v-model="form.Aline2"
                      />
                    </div>
                  </div>
                </div>
<!--  2 -->
                <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >City</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="city"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.City"
                      />
                    </div>
                  </div>
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >state/Province</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="State/Province"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.State"
                      />
                    </div>
                  </div>
                </div>
  <!--  3 -->
                     <div class="flex flex-col md:flex-row">
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Country</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <select name="" id="" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="form.Country">
                          <option value="Solo">Solo</option>
                          <option value="Company">Company</option>
                          <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Zipcode</div>
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="00263"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Zipcode"
                      />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

<!-- section 4 -->
        <section v-if="step == 4">
          <Step4 />
        </section>


        <div class="flex p-2 mt-4">
          <button
            class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition"
            v-if="step != 1"
            @click.prevent="prevstep"
          >Previous</button>
          <div class="flex-auto flex flex-row-reverse">
            <button
              class="text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
              v-if="step != totalsteps"
              @click.prevent="nextstep"
            >Next</button>
            <button
              class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-200 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition"
              v-if="step == 4"
              @click.prevent="send"
            >Submit</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import Step1 from "~/components/step1";
import Step2 from "~/components/step2";
import Step3 from "~/components/step3";
import Step4 from "~/components/step4";
export default {
   layout:"none",
  components: {
    Step1,
    Step2,
    Step3,
    Step4
  },
  data() {
    return {
      form: {
    Bname:"" ,
    Bcategory:"" ,
    Bemail:"" ,
    Bphone:"" ,
    Btype:"" ,
    Fname:"" ,
    Lname:"" ,
    Username:"" ,
    Email:"",
    Password:"",
    Aline1:"",
    Aline2:"" ,
    City:"" ,
    State:"" ,
    Country:"" ,
    Zipcode:"" ,
    registered:"" ,
    paymentmade: false,
    selectedFile:"",
    Confirm:"",
    fileName:''
      },
      totalsteps: 4,
      step: 1,
      errors: []
    };
  },
  methods: {
    nextstep() {
      this.step++;
    },
    prevstep() {
      this.step--;
    },
    onFileSelected(){
        this.form.selectedFile = event.target.files[0];
        this.form.fileName = event.target.files[0].name;
    },
    async send() {
    const data = new FormData();
    data.append("Bname",this.form.Bname);
    data.append("Bcategory",this.form.Bcategory);
    data.append("Bemail",this.form.Bemail);
    data.append("Bphone",this.form.Bphone);
    data.append("Btype",this.form.Btype);
    data.append("Blogo",this.form.selectedFile, this.form.selectedFile.name);
    data.append("Fname",this.form.Fname);
    data.append("Lname",this.form.Lname);
    data.append("Username",this.form.Username);
    data.append("Email",this.form.Email);
    data.append("Password",this.form.Password);
    data.append("Aline1",this.form.Aline1);
    data.append("Aline2",this.form.Aline1);
    data.append("City",this.form.City);
    data.append("State",this.form.State);
    data.append("Country",this.form.Country);
    data.append("Zipcode",this.form.Zipcode);
    data.append("registered", true);
    data.append("Confirm",this.form.Confirm);
    data.append("paymentmade", false);
    console.log(data)
  /*   if(this.form.Password === this.form.Confirm){
  let response = await this.$axios.$post("/api/auth/signup", data);
    console.log(response);
    if(response.success){
     await this.$auth.loginWith("local",{
        data:{
          email:this.form.Email,
          password:this.form.Password
        }
      });
      this.$router.push("/payment")
    }
    }else {
      this.$toast.error("Passwords do not match").goAway(1000);
    } */



    }
  }
};
</script>