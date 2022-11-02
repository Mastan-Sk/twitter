import {getProviders } from "next-auth/react"

export default function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-4 bg-gray-700">
                <img src="/twitter.png" alt="twitter image in phone" className="hidden md:inline-flex object-cover md:w-44 md:h-80 rotate-6"/>
                
                <div className="">
                    {Object.values(providers).map((provider)=>(
                        <>
                                    <div className=" flex flex-col items-center" >
                                    
                                    <img className="w-36 object-cover " src="/twitterImage.png"  alt="loading the logo"/>
                                    
                                    <p className="text-center text-sm italic my-10 "> this is only for the learning purposes </p>

                                    <button className="bg-sky-400 rounded-lg p-3 text-white hover:bg-sky-500"> Sign in with {provider.name}</button>

                                    </div>
                        </>
                    ))}
                </div>
    </div>
  )
}


export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props : {
            providers,
        },
    };
}

