import TwitterProfile from "../models/twitter"

const createTwitter = async (req,res) => {
  try {
    const saas = await TwitterProfile.create(req.body)
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

export {createTwitter}