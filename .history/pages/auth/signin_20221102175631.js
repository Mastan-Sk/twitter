import {getProviders } from "next-auth/react"

export default function signin({providers}) {
  return (
    <div className="flex ">
                <img src="/twitter.png" alt="twitter image in phone" className="hidden md:inline-flex object-cover "/>
                
                <div className="">
                    {Object.values(providers).map((provider)=>(
                        <>
                                    <div className="">
                                    
                                    <img src="/twitterImage.png"  alt="loading the logo"/>
                                    
                                    <p> this is only for the learning purposes </p>

                                    <button> Sign in with {provider.name}</button>

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

