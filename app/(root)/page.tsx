// import { UserButton } from '@clerk/nextjs'
// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <p>Home</p>
//       <UserButton afterSignOutUrl='/' />
//     </div>
//   )
// }

// export default Home

import { UserButton, auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { userId } = auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <main className="">
      <div className="">
        <h1 className="">Imaginify</h1>
        {/* <UserButton afterSignOutUrl="/" /> */}
      </div>
      {/* <div className="mt-8">
        <p>Welcome to Imaginify!</p>
      </div> */}
    </main>
  )
}