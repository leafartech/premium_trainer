import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

type AgendamentoProps = {
    day: string
    hours: string
    month: string
    product: string
    name: string
    phoneNumber: string
}

export default async function Agendamento(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise
    const db = client.db('Cluster0')
    const collection = db.collection('projeto-joaos')

    let user: any = null
    user = await collection.findOne({ email: 'joaomarconavarro@gmail.com' })

    //Verificar os dados que vieram do front
    //Busca na constante do usuário do bd
    //Update
    //Response

    if (user === null) return res.status(500).send({ error: true, message: 'Erro no servidor, tente novamente mais tarde.' })

    const body: AgendamentoProps = req.body.data

    const monthStr = body.month.split('-')[0]
    const day = body.day
    const hour = body.hours

    if (typeof user.schedule.months[monthStr][`${day}`] === 'undefined') {
        user.schedule.months[monthStr][`${day}`] = {}
    }

    user.schedule.months[monthStr][`${day}`][`${hour}`] = {
        name: body.name,
        phone: body.phoneNumber,
        product: [body.product],
        date: {
            hour,
            day,
            month: body.month
        }
    }

    //Verificar se usuário já existe
    let position = 0
    const clientExists = user.clients.filter((person: { name: string, phone: string }, index: number) => {
        let verify = person.name === body.name && person.phone === body.phoneNumber
        if (verify) position = index
        return verify
    })

    if (clientExists.length > 0) {
        //pegar index e atualizar obj

        user.clients[position] = {
            ...user.clients[position],
            product: [...user.clients[position].product, body.product],
            purchases: parseInt(user.clients[position].purchases) + 1,
            date: {
                hour,
                day,
                month: body.month
            }
        }
    } else {
        user.clients.unshift({
            name: body.name,
            phone: body.phoneNumber,
            product: [body.product],
            goal: '',
            purchases: 1,
            date: {
                hour,
                day,
                month: body.month
            }
        })
    }

    await collection.findOneAndUpdate({ email: 'joaomarconavarro@gmail.com' }, {
        $set: {
            "schedule": user.schedule,
            "clients": user.clients
        }
    })

    const userData = user.clients[position]

    res.status(200).send({ userData: JSON.stringify(userData), error: false, message: 'O seu agendamento foi realizado com sucesso!' })

}