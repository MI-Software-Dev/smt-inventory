import { api } from '~/api'
import type { APIEvent } from '@solidjs/start/server'

export async function ALL({ request }: APIEvent) {
  try {
    const url = new URL(request.url)
    const path = url.pathname.replace(/^\/api/, '') || '/'
    const search = url.search

    console.log('API Route Handler:', { method: request.method, path, search })

    const response = await api.handle(
      new Request(`http://localhost${path}${search}`, {
        method: request.method,
        headers: request.headers,
        body: ['GET', 'HEAD'].includes(request.method) ? undefined : await request.text()
      })
    )

    console.log('API Response:', response.status)
    return response
  } catch (error) {
    console.error('API Handler Error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
