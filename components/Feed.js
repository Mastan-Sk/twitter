import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";


export default function Feed() {
  const posts = [
    {
      id : "1",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/06/06/941591-untitled-design-2021-06-06t141032.871.jpg",
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU",
      text : "The nature",
      timestamp : "35 minutes ago"
    },
    {
      id : "2",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://scontent.fhyd1-5.fna.fbcdn.net/v/t1.6435-9/47005447_1822907737808558_6823498419571523584_n.jpg?stp=cp0_dst-jpg_e15_p403x403_q65&_nc_cat=111&ccb=1-7&_nc_sid=9e2e56&_nc_ohc=Rexp1MM93pwAX-ph9LK&_nc_ht=scontent.fhyd1-5.fna&oh=00_AfBgGyCiFxR1O-ZtMV9PySHafxevHc_UbEXxu-4O712SpA&oe=6386A47B",
      userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU",
      text : "Good Feeling",
      timestamp : "8 hours ago"
    },
    {
      id : "3",
      name : "Pearl V Puri",
      username :"pearlvpuri",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdH5d_I-3lzVLo0Xya74MRMuq5rNZBCGXa-oVtWmyBoVqtbIMhDaMgjrdZCLfwfn9oH8&usqp=CAU",
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
