import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const authcookie = cookies().get('Refresh')
  const loggedIn = !!authcookie
  const nextPath = request.nextUrl.pathname
  const redirectPath = `/auth/signin?next=${nextPath}`

  if (!loggedIn)
    return NextResponse.redirect(new URL(redirectPath, request.nextUrl))
}

export const config = {
  matcher: ['/reservations:path*', '/account:path*'],
}
