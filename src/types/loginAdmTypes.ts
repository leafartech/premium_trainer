import { admLoginSchema } from "schemas/schemaFormAdm"
import { z } from "zod"

type LoginAdmSchemaType = z.infer<typeof admLoginSchema>

export type { LoginAdmSchemaType }
