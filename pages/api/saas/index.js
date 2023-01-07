import nc from "next-connect";
import { saas } from "../../../controllers/saas";
import mongoConnect from "../../../lib/mongodb";

const handler = nc();
mongoConnect();
handler.get(saas)

export default handler;