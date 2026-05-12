import { edenTreaty } from "@elysiajs/eden"
import type { App } from "../../server"

const isServer = typeof window === 'undefined'

export const client = edenTreaty<App>(
  isServer ? 'http://localhost:4000' : 'http://localhost:4000'
)
