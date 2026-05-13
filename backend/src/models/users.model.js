import mongoose from "mongoose";

//Base user schema

const userSchema = new mongoose.Schema({
    name:{ type:String},
    role:{type:String, enum:["Customer","Admin","DeliveryPartner"],

        required : true,
    }
    ,
    isActivated:{type:Boolean,default:false}
})

//Customer schema


const customerSchema = new mongoose.Schema({
    ...userSchema.obj,
    phoneNumber:{type:Number, required:true, unique:true},
    role:{type:String, enum:["Customer"], default:"Customer"},
    liveLocation:{
        latitude:{type:Number},
        longitude:{
            type:Number
        }
    },
    address:{type:String},
   
})

const deliveryPartnerSchema = new mongoose.Schema({
    ...userSchema.obj,
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    phoneNumber:{type:Number, required:true, unique:true},
    role:{type:String, enum:["Customer"], default:"Customer"},
    liveLocation:{
        latitude:{type:Number},
        longitude:{
            type:Number
        }
    },
    address:{type:String},
    branch:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Branch"
    }
})

const adminSchema = new mongoose.Schema({
    ...userSchema.obj,
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["Admin"],default:"Admin"}
})

export const UserSchema = mongoose.model("UserSchema",userSchema)


export const CustomerSchema = mongoose.model("CustomerSchema",customerSchema)

export const DeliveryPartner = mongoose.model("DeliveryPartner",deliveryPartnerSchema)

export const Admin = mongoose.model("Admin",adminSchema)