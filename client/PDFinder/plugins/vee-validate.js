import { extend } from "vee-validate";
import { required, alpha, image, digits, integer } from "vee-validate/dist/rules";

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
extend("image", {
    ...image,
    message: "Field must have an image"
});

extend('digits', {
    ...digits,
    message: 'Enter digits only'
})

extend('integer', {
    ...integer,
    messasge: 'Only integers allowed'
});
extend('phone', {
    message(fieldName) {
        return `${fieldName} is not a valid phone number`;
    },
    validate(value) {
        return new Promise(resolve => {
            let phone = new PhoneNumber(value);
            resolve({ valid: phone.isValid() })
        });
    }
});