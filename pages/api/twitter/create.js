import nc from "next-connect";
import { createTwitter } from "../../../controllers/createTwitter";
import mongoConnect from "../../../lib/mongodb";

const handler = nc();
mongoConnect();

handler.post(createTwitter)

export default handler;