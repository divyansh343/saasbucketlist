import nc from "next-connect";
import { twitterProfile } from "../../../controllers/twitterProfile";
import mongoConnect from "../../../lib/mongodb";

const handler = nc();
mongoConnect();
handler.get(twitterProfile)

export default handler;