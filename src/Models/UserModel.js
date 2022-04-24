 const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },

    lname: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    profileImage: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minLen: 8,
        maxLen: 15,
        trim: true
    },

    address: {
        shipping: {
            street: {type: String, required: true, trim: true},
            city: {type: String, required: true, trim:true},
            pincode: {type: Number, required: true, trim: true}
        },

        billing: {
            street: {type:String, required: true, trim: true},
            city: {type: String, required: true, trim: true},
            pincode: {type: Number, required: true, trim: true}
        }
    },
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)


//-------------------------------------------------------------------------------------------------------//
/* const mongoose = require('mongoose')
const isemail = require('isemail');
const uniqueValidator = require('mongoose-unique-validator'); 

const validPhone = function(phone){
    const regexForMobile = /^[6-9]\d{9}$/
    return regexForMobile.test(phone)
}


const UserSchema = new mongoose.Schema({

    firstName :{
        type     : String,
        required : [ true, `User first name must be provided`],
        trim     : true
    },
    lastName :{
        type     : String,
        required : [true, "User Last name must be provided"],
        trim     : true
    },
    email: {
        type: String,
        required: [true, 'The email field is required'],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: (data)=>{
                return isemail.validate(data)
            },
            message: 'Enter a valid Email Id'
        }
    },
    profileImage:{
        type     : String,
        required : [ true, `"profile image  name must be provided"`],
        trim     : true
    },
    phone :{
        type     : String,
        required : [true, "mobile number must be provided"],
        unique   : [true, "mobile number already exist"],
        trim     : true,
        validate : [validPhone, "enter a valid 10 digit mobile number without country code and 0"]
    },
   
    password :{
        type     : String,
        required : [true, "password must be provided"],
        minlength: 8
       
    },
    address: {
        shipping: {
            street: {type: String, required: true, trim: true},
            city: {type: String, required: true, trim:true},
            pincode: {type: Number, required: true, trim: true}
        },

        billing: {
            street: {type:String, required: true, trim: true},
            city: {type: String, required: true, trim: true},
            pincode: {type: Number, required: true, trim: true}
        }
    },

}, {timestamps : true})
 */

// UserSchema.plugin(uniqueValidator, { message: `Error, {PATH} {VALUE} must be unique.` });



 

