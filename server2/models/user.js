const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
    Bname: String,
    Bcategory: String,
    Bemail: String,
    Bphone: String,
    Btype: String,
    Blogo: String,


    Fname: String,
    Lname: String,
    Username: String,
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Aline1: String,
    Aline2: String,
    City: String,
    State: String,
    Country: String,
    Zipcode: String,
    registered: String,
    paymentmade: false
});

//encrypting before saving
UserSchema.pre('save', function(next) {
    let user = this;
    if (this.isModified('Password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(user.Password, salt, null, function(err, hash) {
                if (err) {
                    return next(err);
                }

                user.Password = hash;
                next();
            })
        })
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function(Password, next) {
    //no arrow function coz we want to access the user using this;
    let user = this;
    return bcrypt.compareSync(Password, user.Password);
}

module.exports = mongoose.model("User", UserSchema);