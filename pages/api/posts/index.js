import nc from "next-connect";
import { postsController } from "../../../controllers/postsController";
import mongoConnect from "../../../lib/mongodb";

const handler = nc();
mongoConnect();
handler.get(postsController)

export default handler;