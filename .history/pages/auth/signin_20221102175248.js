import {getProviders } from "next-auth/react"

export default function signin({providers}) {
  return (
    <div>
                <img src="/twitter.png" alt="twitter image in phone" className="h-25 w-20"/>
                
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

