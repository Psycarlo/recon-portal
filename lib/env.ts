import { z } from 'zod/v4'

const envSchema = z.object({
  NODE_ENV: z.string(),
  SUPABASE_URL: z.url(),
  SUPABASE_KEY: z.string().nonempty(),
  DATABASE_URL: z.url(),
  SUPABASE_SERVICE_KEY: z.string().nonempty(),
})

export type EnvSchema = z.infer<typeof envSchema>

export default envSchema.parse(process.env)
