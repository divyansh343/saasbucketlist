import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const postSchema = new mongoose.Schema({
  title: {
    /* The name of this pet */
    type: String,
    required: [true, 'Please provide a name for this Posts.'],
    maxlength: [20, 'Posts Name cannot be more than 60 characters'],
  },

  link: {
    type: String,
    required: [true, "Please provide the twitter_link"],
    maxlength: [80, "reason length cannot be more than 60 characters"],
  },

  plus :{
    type : Boolean,
    default : false
  }

})

export default mongoose.models.Posts || mongoose.model('Posts', postSchema)