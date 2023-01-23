import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const postSchema = new mongoose.Schema({
  title: {
    /* The name of this pet */
    type: String,
    unique : true,
    required: [true, 'Please provide a title for this Posts.'],
    maxlength: [500, 'Posts Name cannot be more than 80 characters'],
  },

  link: {
    type: String,
    required: [true, "Please provide the post link"],
    maxlength: [400, "reason length cannot be more than 110 characters"],
  },

  plus :{
    type : Boolean,
    default : false
  }

})

export default mongoose.models.Posts || mongoose.model('Posts', postSchema)