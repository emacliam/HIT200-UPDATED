import { extend } from "vee-validate";
import * as VeeValidate from 'vee-validate';
import { required, alpha } from "vee-validate/dist/rules";

Vue.use(VeeValidate, {
    inject: true,
    fieldsBagName: '$veeFields',
    errorBagName: '$veeErrors'
})
extend("required", {
    ...required,
    message: "This field is required"
});

extend("alpha", {
    ...alpha,
    message: "This field must only contain alphabetic characters"
});

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
});