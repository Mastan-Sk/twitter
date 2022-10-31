import Head from 'next/head'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter 3.0</title>
        <link rel='icon' href='https://img.icons8.com/arcade/64/000000/twitter.png'/>
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto'>

      {/* Sidebar */}
        <Sidebar/>
      {/* Feed */}


      {/* widgets */}


      {/* Modal */}

      </main>

    </div>
  )
}
