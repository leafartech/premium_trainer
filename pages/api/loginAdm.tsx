import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import { compareSync } from 'bcrypt'

export default async function loginAdm(req: NextApiRequest, res: NextApiResponse) {
    //[ ] Criar conexão com o banco de dados
    //[ ] Verificar se usuário existe na base
    //[ ] Verificar se o código de acesso está correto
    //[ ] Retornar dados do usuário
    //[ ] Salvar dados no LocalStorage

    const client = await clientPromise
    const db = client.db('BASEDEDADOS')
    const collections = db.collection('projeto-joaos')

    //Primeira verificação
    let data: {password: string} | null = null
    data = await collections.findOne({email: req.body.data.email})

    if (data === null) return res.send({error: true, message: 'Credenciais inválidas.'})

    //Verificar se a senha está válida.
    const isPasswordCorrect = await compareSync(req.body.data.password, data.password)
    
    if (!isPasswordCorrect) return res.send({error: true, message: 'Credenciais inválidas.'})

    //Chegou aqui, o usuário com certeza está autenticado!
    res.status(200).send({error: false, message: 'Sucesso', user: data})
}