import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

export const api = new Elysia({ prefix: '/api' })
  .use(swagger({
    documentation: {
      info: {
        title: 'Inventory API',
        version: '1.0.0',
        description: 'Simple inventory management API'
      }
    }
  }))
  .onBeforeHandle(({ request }) => {
    console.log(`[${new Date().toISOString()}] ${request.method} ${new URL(request.url).pathname}`)
  })
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
