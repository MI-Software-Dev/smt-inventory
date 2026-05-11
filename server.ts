import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors())
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
  .get('/api/time', () => ({
    timestamp: new Date().toISOString(),
    unix: Date.now()
  }), {
    response: t.Object({
      timestamp: t.String({ format: 'date-time' }),
      unix: t.Number()
    })
  })
  .listen(4000, () => {
    console.log('🚀 Elysia API running on http://localhost:4000')
    console.log('📚 Swagger docs at http://localhost:4000/swagger')
  })
