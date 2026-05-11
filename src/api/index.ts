import { Elysia, t } from 'elysia'

export const api = new Elysia({ prefix: '/api' })
  .get('/time', () => ({
    timestamp: new Date().toISOString(),
    unix: Date.now()
  }), {
    response: t.Object({
      timestamp: t.String({ format: 'date-time' }),
      unix: t.Number()
    })
  })

export type API = typeof api
