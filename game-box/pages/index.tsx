import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

import useCurrentUser from '../hooks/useCurrentUser'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return  {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      {console.log(user)}
      <h1 className="text-4xl text-green-400">Game Box</h1>
      <p className="text-white">Logged in as:  {user?.email}</p>
      <button className="h-10 w-20 bg-white" onClick={() => signOut()}>Logout</button>
    </>
  )
}
