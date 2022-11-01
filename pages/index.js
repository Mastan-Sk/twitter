import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'


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
        <Feed/>

      {/* widgets */}
      <Widgets/>

      {/* Modal */}

      </main>

    </div>
  )
}
