import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Cliente(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise
    const db = client.db('Cluster0')
    const collection = db.collection('projeto-joaos')

    const user = await collection.findOne({ email: 'joaomarconavarro@gmail.com' })

    let clientExists: { phone: string }[] = []
    let position = 0
    if (user !== null) {
        clientExists = user.clients.filter((person: { name: string, phone: string }, index: number) => {
            let verify = person.name === req.body.dataPost.name && person.phone === req.body.dataPost.phone
            if (verify) position = index
            return verify
        })
    }

    if (clientExists.length === 0) return res.send({ error: true, message: 'Error' })

    const updatedUser = {
        ...clientExists[0],
        goal: req.body.dataPost.goal
    }

    if (user !== null) {
        user.clients[position] = updatedUser
    }

    await collection.findOneAndUpdate({ email: 'joaomarconavarro@gmail.com' }, {
        $set: {
            'clients': user!.clients
        }
    })

    res.status(200).send({ error: false, message: '', user: user!.clients[position] })
}