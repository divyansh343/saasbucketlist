import nc from "next-connect";
import { createSaas } from "../../../controllers/createSaas";
import mongoConnect from "../../../lib/mongodb";

const handler = nc();
mongoConnect();

handler.post(createSaas)

export default handler;