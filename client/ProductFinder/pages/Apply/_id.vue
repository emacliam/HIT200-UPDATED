<template>
<main>
    <div class="flex flex-col">
        <span>{{apply.FirstName}}</span>
        <span>{{apply.LastName}}</span>
        <span>{{apply.Email}}</span>
        <span>{{apply.PhoneNumber}}</span>
        <span></span>
        <span></span>
        <div class="flex">
            <span @click="sendmail(apply.Email)" class="rounded-full border bg-blue-300 p-2 m-1">Accept By sending email</span>
            <span @click="sendsms(apply.PhoneNumber, apply.Email)" class="rounded-full border bg-blue-300 p-2 m-1">Accept By sending sms</span>
            <span class="rounded-full border bg-blue-300 p-2 m-1">Reject</span>

        </div>

    </div>
</main>

</template>
<script>
export default {
    data() {
        return {
            message:"You have been accepted"
        }
    },
async asyncData({$axios,params}){
    try {
        const response = await $axios.$get(`/api/apply/${params.id}`)
        console.log(response)

        return{
            apply: response.apply
        }

    } catch (err) {
      console.log(err)
    }

},
methods: {
    async sendmail(email){
        try {
             const response = await this.$axios.$post(`/api/apply/send/${email}`);
             if(response.success){
                 console.log("Successfully send")
             }
        } catch (error) {
            console.log(error)
        }



    },
    async sendsms(PhoneNumber, email){
       try {
           const response = await this.$axios.$post(`/api/apply/send/phone/${PhoneNumber}/${email}`);
           if(response.success){
               console.log("successfully send")
           }
       } catch (error) {
           console.log(error)
       }
    }
},
}
</script>