import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function AvaibleHours(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise
    const db = client.db('Cluster0')
    const collection = db.collection('projeto-joaos')

    const user = await collection.findOne({ email: 'joaomarconavarro@gmail.com' })

    res.status(200).send(user)
}