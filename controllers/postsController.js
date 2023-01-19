import Posts from "../models/post"

const postsController = async (req, res) => {
  try {
    Posts.find({}).then(async (posts)=> {
      const number = await Posts.countDocuments();
      const response = {
        status:200,
        count : number,
        posts
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
  postsController
}