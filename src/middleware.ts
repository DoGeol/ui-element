import {NextRequest, NextResponse} from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse
  const reqHeader = new Headers(request.headers)
  return NextResponse.next({request: {headers: reqHeader}})
}

export const config = {
  // unstable_allowDynamic: [
  //   '**/node_modules/lodash.**/**/*.js',
  //   '**/node_modules/resize-observer-polyfill/**',
  // ],
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|p/c|p/a).*)',
  ],
}
