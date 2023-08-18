import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next'

export default async function LoginCliente(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise
    const db = client.db('Cluster0')
    const collection = db.collection('projeto-joaos')

    const user = await collection.findOne({ email: 'joaomarconavarro@gmail.com' })

    //Verificar se o nome da pessoa existe no bd
    //Verificar se o telefone corresponde a daquela pessoa
    let clientExists: { phone: string }[] = []
    let position = 0
    if (user !== null) {
        clientExists = user.clients.filter((person: { name: string }, index: number) => {
            let verify = person.name === req.body.data.name
            if (person.name === req.body.data.name) position = index
            return verify
        })
    }

    if (clientExists.length === 0) return res.send({ error: true, message: 'Dados inválidos.' })

    //Verificar se o telefone corresponde
    if (clientExists[0].phone !== req.body.data.phone) return res.send({ error: true, message: 'Dados inválidos.' })

    res.status(200).send({ error: false, message: '', user: clientExists[0] })
}