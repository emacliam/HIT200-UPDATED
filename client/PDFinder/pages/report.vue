<template>
   <div class="w-screen h-screen flex justify-center items-center bg-gray-50">
    <form class="mx-4 bg-white max-w-md p-10 md:rounded-lg my-8 mx-auto">
        <div class="title">
            <h1 class="font-bold text-center text-xl text-teal-600 uppercase">Report a bug or request a feature</h1>
        </div>

        <div class="options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-8">
            <p class="w-1/2 mb-2 md:mb-0">I would like to </p>
            <select class="w-full border border-gray-200 p-2 focus:outline-none focus:border-gray-500" v-model="type">
                <option value="select" selected>Select an option</option>
                <option value="bug">report a bug</option>
                <option value="feature">Request a feature</option>
                <option value="feedback">Feedback</option>
            </select>
        </div>

            <div class="form mt-4 mb-4">
                <div class="flex flex-col text-sm">
                    <label for="title" class="font-bold mb-2 uppercase text-gray-600">Title</label>
                    <input class=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" type="text" placeholder="Enter a title" v-model="title">
                </div>
                <div class="flex flex-col text-sm">
                    <label for="title" class="font-bold mb-2 uppercase text-gray-600">Email</label>
                    <input class=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500" type="email" placeholder="Enter email" v-model="email">
                </div>

               <div class="text-sm flex flex-col">
                <label for="description" class="font-bold mt-4 mb-2 uppercase text-gray-600">Description</label>
                   <textarea class=" appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500"  placeholder="Enter your description" v-model="description"></textarea>
               </div>
            </div>

            <div >
                <span @click="onReport" class=" cursor-pointer w-full bg-teal-600 shadow-lg px-4 py-2 rounded-lg hover:bg-black hover:text-white mt-8 text-center font-semibold focus:outline-none ">Submit</span>
            </div>
    </form>
    </div>
</template>
<script>
export default {
    layout:"none",
    data() {
        return {
            type:'',
            title:'',
            email:'',
            description:''
        }
    },
    methods: {
        async onReport(){
            let data = {
                type:this.type,
                title:this.title,
                email:this.email,
                description:this.description
            }

             const report = await this.$axios.$post('/api/report', data);
             console.log(report)
              if(report.success === true){
                 this.$toast.success('Successfully send').goAway(2000);
                 this.$router.push('/')
             } else {
                 this.$toast.error('Failed try again').goAway(2000);
             }


        }
    },

}
</script>