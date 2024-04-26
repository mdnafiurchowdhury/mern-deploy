import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({

  to:{
    type: String,
    required: true
  },
  from:{

    type: String,
    required: true
  },
  subject:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true,
  },
  image:{
    type: String,
    

  },
  name:{
    type: String,
    required: true,
  },
  starred:{
    type: Boolean,
    required: true,
    default: false

  },
  bin:{
    type: String,
    required: true,
    default: false

  },
  type:{
    type:String,
    required: true,
    default: false
  }

  
})
const emailVal = mongoose.model('email',EmailSchema)
export default emailVal;