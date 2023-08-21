import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const LoginClienteSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório'),
    phone: z.string().min(11, 'Formatação aceita: DDD 9 XXXX-XXXX')
})

type LoginClienteSchemaProps = z.infer<typeof LoginClienteSchema>

const LoginCliente = () => {
    const router = useRouter()
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm<LoginClienteSchemaProps>({
        resolver: zodResolver(LoginClienteSchema)
    })

    async function formSubmited(data: LoginClienteSchemaProps) {
        await axios.post('/api/loginCliente', { data }).then(res => {
            if (res.data.error) {
                setError(res.data.message)
                return
            }

            localStorage.setItem('train-client', JSON.stringify(res.data.user))
            router.push('/cliente')
        }).catch(e => console.log(e))
    }

    let auth: null | string = null
    if (typeof window !== 'undefined') {
        auth = localStorage.getItem('train-client')
    }

    if (typeof window !== 'undefined' && auth !== null) {
        router.push('/cliente')
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <form
                className="text-zinc-300 max-w-xs w-full sm:max-w-lg flex flex-col gap-5"
                onSubmit={handleSubmit(formSubmited)}
            >
                <div className="flex flex-col justify-center items-center">
                    <img src="../images/logo01.png" alt="" className="w-10 h-12 mb-6" />
                    <h2 className="text-3xl text-brandWhite text-center font-semibold">
                        Acessar Painel
                    </h2>
                    <p className="text-zinc-300 text-sm text-center">Os dados precisam ser exatamente iguais aos utilizados no agendamento.</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label>Nome:</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="bg-transparent border px-4 py-2 rounded-lg border-gray-600 focus:outline-none focus:border-gray-400"
                    />
                    {errors.name && <span className="text-brandRed-500 font-medium text-[12px]">{errors.name?.message}</span>}
                </div>
                <div className="flex flex-col gap-1">
                    <label>Telofone:</label>
                    <input
                        type="number"
                        {...register("phone")}
                        className="bg-transparent border px-4 py-2 rounded-lg border-gray-600 focus:outline-none focus:border-gray-400"
                    />
                    {errors.phone && <span className="text-brandRed-500 font-medium text-[12px]">{errors.phone?.message}</span>}
                </div>
                <button
                    type="submit"
                    className="w-full flex items-center justify-center py-2 text-brandWhite font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-lg"
                >
                    Entrar
                </button>
                {error.length > 0 && <span className="text-brandRed-500 font-medium text-[14px] text-center">{error}</span>}
            </form>
        </div>
    )
}

export default LoginCliente