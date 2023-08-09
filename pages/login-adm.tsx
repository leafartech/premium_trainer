import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/router"
import { admLoginSchema } from "schemas/schemaFormAdm"
import { LoginAdmSchemaType } from "../types/loginAdmTypes"

const LoginAdm = () => {
  const [messages, setMessages] = useState("")
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginAdmSchemaType>({
    mode: "all",
    resolver: zodResolver(admLoginSchema)
  })

  async function formSubmited(data: LoginAdmSchemaType) {
    await axios.post("/api/loginAdm", { data }).then((res) => {
      if (res.data.error) {
        setMessages(res.data.message)
        return
      }

      localStorage.setItem("train-system", JSON.stringify(res.data.user))

      router.push("/adm")
    })
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form
        className="text-zinc-300 max-w-xs w-full sm:max-w-lg flex flex-col gap-5"
        onSubmit={handleSubmit(formSubmited)}
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl text-white text-center font-semibold">
            Acessar Painel
          </h2>
          {messages.length > 0 && (
            <span className="font-medium text-[10px] text-center">
              {messages}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Email:</label>
          <input
            type="email"
            {...register("email")}
            className="bg-transparent border px-4 py-2 rounded-lg border-gray-600 focus:outline-none focus:border-gray-400"
          />
          {errors.email && (
            <span className="text-red-500 font-medium text-[12px]">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label>Código de acesso:</label>
          <input
            type="password"
            {...register("password")}
            className="bg-transparent border px-4 py-2 rounded-lg border-gray-600 focus:outline-none focus:border-gray-400"
          />
          {errors.password && (
            <span className="text-red-500 font-medium text-[12px]">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center py-2 text-white font-semibold bg-emerald-600 rounded-lg"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default LoginAdm
