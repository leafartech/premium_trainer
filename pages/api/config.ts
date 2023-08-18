import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function Config(req: NextApiRequest, res: NextApiResponse) {

    const client = await clientPromise
    const db = client.db('Cluster0')
    const collection = db.collection('projeto-joaos')


    let body: string[] = Object.values(req.body.data)
    const avaibleHours: number[] = []
    for (let p in body) {
        if (!isNaN(parseInt(body[p][0]))) {
            let splited = body[p].split(':')
            avaibleHours.push(parseInt(splited[0]))
        }
    }

    let backup = null
    backup = await collection.findOne({ email: req.body.user })

    const schedule = {
        ...backup!.schedule,
        avaibleHours
    }

    backup!.schedule = schedule

    await collection.findOneAndUpdate({ email: req.body.user }, {
        $set: {
            "schedule": schedule
        }
    })

    return res.status(200).send({ ...backup, success: true })
}