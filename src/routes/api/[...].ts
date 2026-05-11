import { api } from '~/api'
import type { APIEvent } from '@solidjs/start/server'

export async function ALL({ request }: APIEvent) {
  const url = new URL(request.url)
  const path = url.pathname.replace(/^\/api/, '') || '/'
  const search = url.search

  return api.handle(
    new Request(`http://localhost${path}${search}`, {
      method: request.method,
      headers: request.headers,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : await request.text()
    })
  )
}
