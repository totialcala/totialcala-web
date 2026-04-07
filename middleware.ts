import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/portal/dashboard') || pathname.startsWith('/admin')) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
