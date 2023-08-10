export { default } from "next-auth/middleware"


//if you want to protect only certain pages, use this code
// export const config = { matcher: [
//     '/',
//     '/app/:path*'
// ]}



// middleware.ts


// import { getSession } from "next-auth/react"

// export default async function middleware(req) {
//   const session = await getSession({ req })

//   const whitelist = ["/signup"]

//   if (whitelist.includes(req.nextUrl.pathname)) {
//     return NextResponse.next()
//   }

//   if (!session) {
//     return NextResponse.redirect("/signup") 
//   }

//   return NextResponse.next()
// }