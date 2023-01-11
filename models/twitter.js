import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const twitterProfileSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */
    type: String,
    required: [true, 'Please provide a name for this TwitterProfile.'],
    maxlength: [20, 'TwitterProfile Name cannot be more than 60 characters'],
  },

  bio: {
    type: String,
    required: [true, 'Please specify the bio  of TwitterProfile.'],
  },

  twitter_link: {
    type: String,
    required: [true, "Please provide the twitter_link"],
    maxlength: [30, "reason length cannot be more than 60 characters"],
  },

  followers: {
    type: String,
    required: [true, 'Please specify the followers  of TwitterProfile.'],
  },
  hashtags: {
    type: String,
  },

  site_link: {
    type: String,
  },
  github_link: {
    type: String,
  },
  youtube_link: {
    type: String,
  },
})

export default mongoose.models.TwitterProfile || mongoose.model('TwitterProfile', twitterProfileSchema)