'use client'

import { Alert } from '../../../components/ui/alert'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState('') // Added first name state
  const [lastName, setLastName] = useState('') // Added last name state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          firstName, // Added first name to the request body
          lastName, // Added last name to the request body
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        signIn()
      } else {
        setError((await res.json()).error)
      }
    } catch (error: any) {
      setError(error?.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="firstName">First Name</Label> {/* Added first name label */}
        <Input
          className="w-full"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} // Added first name input handler
          id="firstName"
          type="text"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="lastName">Last Name</Label> {/* Added last name label */}
        <Input
          className="w-full"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} // Added last name input handler
          id="lastName"
          type="text"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full" size="lg">
          Register
        </Button>
      </div>
    </form>
  )
}


// 'use client'

// import { Alert } from 'components/ui/alert'
// import { Button } from 'components/ui/button'
// import { Input } from 'components/ui/input'
// import { Label } from 'components/ui/label'
// import { signIn } from 'next-auth/react'
// import { useState } from 'react'

// export const RegisterForm = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState<string | null>(null)

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     try {
//       const res = await fetch('/api/register', {
//         method: 'POST',
//         body: JSON.stringify({
//           email,
//           password
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       if (res.ok) {
//         signIn()
//       } else {
//         setError((await res.json()).error)
//       }
//     } catch (error: any) {
//       setError(error?.message)
//     }
//   }

//   return (
//     <form onSubmit={onSubmit} className="space-y-12 w-full sm:w-[400px]">
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="email">Email</Label>
//         <Input
//           className="w-full"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           id="email"
//           type="email"
//         />
//       </div>
//       <div className="grid w-full items-center gap-1.5">
//         <Label htmlFor="password">Password</Label>
//         <Input
//           className="w-full"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           id="password"
//           type="password"
//         />
//       </div>
//       {error && <Alert>{error}</Alert>}
//       <div className="w-full">
//         <Button className="w-full" size="lg">
//           Register
//         </Button>
//       </div>
//     </form>
//   )
// }