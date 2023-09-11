import { z } from "zod"

const admLoginSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório.")
    .email("E-mail inválido."),
  password: z
    .string()
    .nonempty("A senha é obrigatória.")
    .min(6, "A senha está incorreta.")
})

export { admLoginSchema }
