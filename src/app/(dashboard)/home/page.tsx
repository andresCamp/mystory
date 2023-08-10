import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { options } from '../../api/auth/[...nextauth]/options'
import { User } from '../../components/User'
import { hash } from 'bcrypt' 

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <h1>Welcome to MyStory, {session?.user?.name?.split(' ')[0]}!</h1>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <h1>Client Call</h1>
      <User />
    </main>
  )
}
