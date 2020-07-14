<template>
  <section>
    <h3>VeeValidate - Nuxt Example:</h3>
<!--
<div>FOR password and confirm password</div>
    <ValidationObserver>
  <ValidationProvider rules="required|password:@confirm" v-slot="{ errors }">
    <input type="password" v-model="password" class="border rounded-lg h-8 m-4 pl-3" placeholder="Enter password">
    <span>{{ errors.any() }}</span>
  </ValidationProvider>


    <InputWithValidation  type="password" rules="required" v-model="confimation" :error-messages="errors" class="border rounded-lg h-8 m-4 pl-3"/>
</ValidationObserver>

<span class="cursor-pointer border rounded-lg bg-blue-500 text-white px-8 py-2" @click="ext" :disabled="errors.any()">Send</span> -->
<ValidationObserver v-slot="{ invalid }">
  <form @submit.prevent="submit">
    <InputWithValidation rules="required" v-model="first" :error-messages="errors" />

    <InputWithValidation rules="required" v-model="second" :error-messages="errors" />

    <v-btn :disabled="invalid">Submit</v-btn>
  </form>
</ValidationObserver>

  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider
  },
  data: () => ({
    value: "",
  }),
  methods: {
      ext(){

      }
  },
};
</script>