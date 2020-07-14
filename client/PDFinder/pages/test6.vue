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
  <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit()">
    <input rules="required" v-model="first" :error-messages="errors" class="bg-blue-600" />

    <input rules="required" v-model="second" :error-messages="errors" class="bg-blue-600" />

    <button :disabled="invalid">Submit</button>
  </ValidationObserver>
  <ValidationProvider
          v-slot="{ errors }"
          name="Username"
          rules="required">
          <b-form-group id="input-group-4"
                        label="Username:"
                        label-for="input-4">
            <input
              id="input-4"
              v-model="username"
              required
              placeholder="Please enter a username"
            />
            <span class="input-invalid-message">
              {{ errors[0] }}
            </span>
          </b-form-group>
</ValidationProvider>

  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    value: "",
    first:'',
    second:''
  }),
  methods: {
      ext(){

      }
  },
};
</script>