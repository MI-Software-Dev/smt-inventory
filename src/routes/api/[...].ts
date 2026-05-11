import { api } from '~/api'
import type { APIEvent } from '@solidjs/start/server'

export async function ALL({ request }: APIEvent) {
  const url = new URL(request.url)
  const path = url.pathname.replace(/^\/api/, '') || '/'

  const response = await api.handle(
    new Request(`http://localhost:3000${path}`, {
      method: request.method,
      headers: request.headers,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : await request.text()
    })
  )

  return response
}
