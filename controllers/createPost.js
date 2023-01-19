import Posts from "../models/post"

const createPost = async (req,res) => {
  try {
    const saas = await Posts.create(req.body)
    res.status(201).json({
      status:201,
      saas: saas
    })
  } catch (error) {
    res.status(400).json({
      status:400,
      error: error
    })
  }
}

export {createPost}