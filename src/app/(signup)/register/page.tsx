import Link from 'next/link'
import { RegisterForm } from './form'

export default function RegisterPage() { //href to /login once page is up
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Create your Account</h1>
        <RegisterForm />
        <p className="text-center">
          Have an account?{' '}
          <Link className="text-indigo-500 hover:underline" href="/api/auth/signin"> 
            Sign in
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       TEST
//     </div>
//   )
// }

// export default page



// import React from 'react'
// import Link from 'next/link'
// import { RegisterForm } from './form'

// const RegisterPage = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
//       <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
//         <h1 className="font-semibold text-2xl">Create your Account</h1>
//         <RegisterForm />
//         <p className="text-center">
//           Have an account?{' '}
//           <Link className="text-indigo-500 hover:underline" href="/login">
//             Sign in
//           </Link>{' '}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default RegisterPage
