import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";


export default function Feed() {
  const posts = [
    {
      id : "1",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://images.unsplash.com/photo-1516381093400-a0fecb601de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9zdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU",
      text : "The nature",
      timestamp : "35 minutes ago"
    },
    {
      id : "2",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://images.unsplash.com/photo-1599331516721-6469a02d81b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU",
      text : "Good Feeling",
      timestamp : "8 hours ago"
    },
    {
      id : "3",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://images.unsplash.com/photo-1630253158595-736bc9961e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvc3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU",
      text : "nice",
      timestamp : "21 hours ago"
    },
    {
      id : "4",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxScG2ozHrlcdM95TRSsGd8BYpdorVFqOFA&usqp=CAU",
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU",
      text : "Adorable",
      timestamp : "1 day ag0"
    },
    {
      id : "5",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Aa3j0Hu0TGZKo1w_PjRrdsO_lNWiANzn8g&usqp=CAU",
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU",
      text : "hey.",
      timestamp : "2 days ago"
    }

  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5"/>
            </div>
        </div>

        <Input/>


        {
            posts.map((post)=>(
                <Post key={post.id} post={post}/>
              ))
        }
        </div>
  )
}
