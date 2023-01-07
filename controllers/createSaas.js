import Saas from "../models/saas"

const createSaas = async (req,res) => {
  try {
    const saas = await Saas.create(req.body)
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

export {createSaas}