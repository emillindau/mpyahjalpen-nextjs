import { postSlackRegistration } from "../../../lib/slackpost";

export default async function handler({query: {text}}, res){
    const result = await postSlackRegistration(text);
    res.status(result.status).send();
}