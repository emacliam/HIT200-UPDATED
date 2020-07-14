<template>
  <main class="h-screen w-screen pt-8">
    <div class="container pt-5 pb-5 w-3/4 m-auto bg-white rounded-lg">
    <ValidationObserver v-slot="{ handleSubmit }" >
      <form  @submit.prevent="handleSubmit(onSubmit)">
        <span v-for="e in errors" :key="e" class="text-red-600">{{ e }}</span>


        <section v-if="step == 1">
         <div class="p-5">
            <Step1 />
            <div class="mt-8 p-4">
              <div>
                  <!--  1 -->
                <div class="flex flex-col md:flex-row">
                    <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full flex-1 mx-2 svelte-1l8159u">
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
                    <span class="text-red-600">{{ errors[0] }}</span>
                          </ValidationProvider>

                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }"  class="w-full flex-1 mx-2 svelte-1l8159u">
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
                          <span class="text-red-600">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
<!--  2 -->
                <div class="flex flex-col md:flex-row">
                  <ValidationProvider  rules="required|phone" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                  <ValidationProvider  rules="required|email" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
  <!--  3 -->
                     <div class="flex flex-col md:flex-row">
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                  <ValidationProvider  rules="required|image" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div
                      class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
                    >Company Logo(optional)</div>
    <div class="flex items-center mt-4">
      <label class="w-48 h-8  text-center items-center bg-teal-600 rounded-lg text-blue font-bold tracking-wide uppercase border border-teal-600 cursor-pointer hover:bg-black hover:text-white">
        <span>Add Logo</span>
        <input type='file' class="hidden" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <img v-bind:src="imagePreview" v-show="showPreview" class="w-24 rounded-full border border-teal-600 h-24 ml-4"/>
    </div>

        <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
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
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full flex-1 mx-2 svelte-1l8159u">
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="First Name"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Fname"
                      />
                    </div>
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full flex-1 mx-2 svelte-1l8159u">
                    <div
                      class="bg-white my-2 p-1 flex border border-gray-500 rounded svelte-1l8159u"
                    >
                      <input
                        placeholder="Last Name"
                        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        v-model="form.Lname"
                      />
                    </div>
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="flex flex-col md:flex-row">
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                  <ValidationProvider  rules="required|email" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                 <div class="flex flex-col md:flex-row">
                  <ValidationProvider  rules="required|password" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                  <ValidationProvider  rules="required|confirmed:password" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
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
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full flex-1 mx-2 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full flex-1 mx-2 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
<!--  2 -->
                <div class="flex flex-col md:flex-row">
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                   </ValidationProvider>
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
  <!--  3 -->
                     <div class="flex flex-col md:flex-row">
                  <ValidationProvider  rules="required|alpha" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                   </ValidationProvider>
                  <ValidationProvider  rules="required|alpha|digit" v-slot="{ errors }" class="w-full mx-2 flex-1 svelte-1l8159u">
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
                            <span class="text-red-600">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>


              </div>
            </div>
          </div>
        </section>

<!-- section 4 -->
        <section v-if="step == 4">
          <Step4 />
          <div class="mt-8 flex items-center justify-center">
            <div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">Business name:</span >{{ form.Bname }}</div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">business category:</span >{{ form.Bcategory }}</div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">business email:</span >{{ form.Bemail }}</div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">business phone:</span >{{ form.Bphone}}</div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">business type:</span >{{ form.Btype}}</div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">First name:</span >{{form.Fname}}</div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">Last name:</span >{{form.Lname}}</div>
          <div class="m-4"> <span class="uppercase font-bold text-teal-600 m-4">Username:</span >{{form.Username}}</div>
            </div>
            <div>
          <div class="m-4"><span class="uppercase font-bold text-teal-600 m-4">Email:</span >{{form.Email}}</div>
          <div class="m-4"><span class="uppercase font-bold text-teal-600 m-4">Address one:</span >{{form.Aline1}}</div>
          <div class="m-4"><span class="uppercase font-bold text-teal-600 m-4">Address two:</span >{{form.Aline2}}</div>
          <div class="m-4"><span class="uppercase font-bold text-teal-600 m-4">City:</span >{{form.City}}</div>
          <div class="m-4"><span class="uppercase font-bold text-teal-600 m-4">State:</span >{{form.State}}</div>
          <div class="m-4"><span class="uppercase font-bold text-teal-600 m-4">Country:</span >{{form.Country}}</div>
          <div class="m-4"><span class="uppercase font-bold text-teal-600 m-4">Zipcode:</span >{{form.Zipcode}}</div>
          <div class="m-4"></div>

            </div>
             <img v-bind:src="imagePreview" v-show="showPreview" class="w-48 rounded-lg border border-teal-600 h-48 ml-4"/>
          </div>


        </section>


        <div class="flex p-2 mt-4">
          <button
            class="text-base w-48 hover:bg-black hover:text-white uppercase bg-teal-600 flex justify-center px-4 py-2 rounded font-bold cursor-pointer"
            v-if="step != 1"
            @click.prevent="prevstep"
          >Previous</button>
          <div class="flex-auto flex flex-row-reverse">
            <button
            hidden="handleSubmit"
              class="text-base w-48 hover:bg-black hover:text-white uppercase bg-teal-600 flex justify-center px-4 py-2 rounded font-bold cursor-pointer"
              v-if="step != totalsteps"
              @click.prevent="nextstep"
            >Next</button>
            <button
              class="text-base w-48 hover:bg-black hover:text-white uppercase bg-teal-600 flex justify-center px-4 py-2 rounded font-bold cursor-pointer"
              v-if="step == 4"
              @click.prevent="send"
            >Submit</button>
          </div>
        </div>
      </form>
    </validationObserver>
    </div>
  </main>
</template>

<script>
import Step1 from "~/components/step1";
import Step2 from "~/components/step2";
import Step3 from "~/components/step3";
import Step4 from "~/components/step4";
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
   layout:"none",
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
        ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
         file: '',
        showPreview: false,
        imagePreview: '',
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

    },
    async send() {
      try {

      this.$nuxt.$loading.start()
    let data = new FormData();
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
    if(this.form.Password === this.form.Confirm){
  let response = await this.$axios.$post("/api/auth/signup", data);
   if(response.code === "EAI_AGAIN"){
         this.$toast.error('something went wrong').goAway(2000);
         this.$nuxt.$loading.finish()
    }
    if(response.success){
     this.$nuxt.$loading.finish()
     await this.$auth.loginWith("local",{
        data:{
          email:this.form.Email,
          password:this.form.Password
        }
      });
      this.$router.push("/payment")
    }
    }else {
      this.$toast.error("Passwords do not match").goAway(2000);
      this.$nuxt.$loading.finish()
    }

      } catch (error) {
         this.$toast.error('something went wrong').goAway(2000);
         this.$nuxt.$loading.finish()
      }



    },
      handleFileUpload(){
        this.form.selectedFile = event.target.files[0];
        this.form.fileName = event.target.files[0].name;
        /*
          Set the local file variable to what the user has selected.
        */
        this.form.selectedFile = this.$refs.file.files[0];

        /*
          Initialize a File Reader object
        */
        let reader  = new FileReader();

        /*
          Add an event listener to the reader that when the file
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
        reader.addEventListener("load", function () {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this), false);

        /*
          Check to see if the file is not empty.
        */
        if( this.form.selectedFile ){
          /*
            Ensure the file is an image file.
          */
          if ( /\.(jpe?g|png|gif)$/i.test( this.form.selectedFile.name ) ) {
            /*
              Fire the readAsDataURL method which will read the file in and
              upon completion fire a 'load' event which we will listen to and
              display the image in the preview.
            */
            reader.readAsDataURL( this.form.selectedFile );
          }
        }
      }
    }
  }
</script>
<style scoped>


</style>