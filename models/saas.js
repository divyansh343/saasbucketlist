import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const saasSchema = new mongoose.Schema({
  saas: {
    /* The name of this pet */
    type: String,
    required: [true, 'Please provide a name for this saas.'],
    maxlength: [20, 'saas Name cannot be more than 60 characters'],
  },

  link: {
    type: String,
    required: [true, 'Please specify the link  of saas.'],
    maxlength: [120, 'Species specified cannot be more than 40 characters'],
  },

  why: {
    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [30, "reason length cannot be more than 60 characters"],
  },

  description: {
    type: String,
    required: [true, 'Please specify the description  of saas.'],
  },

  img: {
    type: String,
    required: [true, 'Please specify the image link  of saas.'],
  },

  plus: {
    type: Boolean,
    default: false
  },

  for: [{
      type: String
    }],

  pricing: {
    type: String,
    enum: ['free', 'freemium', 'paid'],
    required: [true, 'Please specify the respecttive tier of saas']
  },
})

export default mongoose.models.Saas || mongoose.model('Saas', saasSchema)