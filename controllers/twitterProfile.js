import TwitterProfile from '../models/twitter'
const twitterProfile = async (req, res) => {
  try {
    TwitterProfile.find({}).then(async (profiles)=> {
      const number = await TwitterProfile.countDocuments();
      const response = {
        status:200,
        count : number,
        profiles
      }
      res.json(response);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: true,
      message: "Internal Server Error"
    });
  }
}
export {
  twitterProfile
}