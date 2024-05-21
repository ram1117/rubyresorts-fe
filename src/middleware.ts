import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: ['/'],
}
