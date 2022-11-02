import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon,BellIcon,InboxIcon,BookmarkIcon,ClipboardIcon,UserIcon,DotsCircleHorizontalIcon, VideoCameraIcon} from "@heroicons/react/outline"
import {useSession} from "next-auth/react"


export default function Sidebar() {

    const {data : session,status} = useSession();
    return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image height={50} width={50} src="https://img.icons8.com/arcade/64/000000/twitter.png" alt="Loading"/>
        </div>



        {/* Menu */}
        
          
        
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon}/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
            <SidebarMenuItem text="Notification" Icon={BellIcon}/>
            <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
            <SidebarMenuItem text="BookMark" Icon={BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon={UserIcon}/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
            <SidebarMenuItem text="Live Tweeting" Icon = {VideoCameraIcon} />
        </div>

        {/* buttons */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* mini profiles */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ejWfXr09lHJza73TAW6HaLAOn4NQKuQR5w&usqp=CAU" alt=""
                className="h-10 w-10 rounded-full xl:mr-2"/>
            <div className="leading-5  hidden xl:inline">
                <h4 className="font-bold">Pearl V Puri</h4>
                <p className="">@pearlvpuri</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
        </div>
    </div>
  )
}
