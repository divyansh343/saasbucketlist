import nc from "next-connect";
import { createPost } from "../../../controllers/createPost";
import mongoConnect from "../../../lib/mongodb";

const handler = nc();
mongoConnect();

handler.post(createPost)

export default handler;