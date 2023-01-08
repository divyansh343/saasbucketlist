import Saas from "../models/saas"
import APIFeatures from "../utils/apiFeatures";
const saas = async (req,res)=> {
	try {
		const apiFeatures = new APIFeatures(Saas.find(),req.query)
		.search()
		.filter()

		const data = await apiFeatures.query;
		const response = {
			status: 200,
			data : data
		}
		res.status(200).json(response);

	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
}
export {saas}