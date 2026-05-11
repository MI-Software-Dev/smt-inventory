import { edenTreaty } from "@elysiajs/eden"
import type { Elysia } from 'elysia'

const isServer = typeof window === 'undefined'

type API = {
  '/api/time': {
    get: { response: { timestamp: string; unix: number } }
  }
}

export const client = edenTreaty<API>(
  isServer ? 'http://localhost:4000' : 'http://localhost:4000'
)
