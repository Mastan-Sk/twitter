import {getProviders } from "next-auth/react"

export default function signin({providers}) {
  return (
    <div>
                <img src="/twitter.png" alt="twitter image " height={0.000001} />
                
                <div className="">
                    {Object.values(providers).map((provider)=>(
                        <>
                                    <div className="">
                                    <img src="https://toppng.com/twitter-logo-PNG-free-PNG-Images_79864"  alt="loading for the people"/>
                                    </div>
                        </>
                    ))}
                </div>
    </div>
  )
}


export async function getServerSideRendering() {
    const providers = await getProviders();

    return {
        props : {
            providers,
        },
    };
}

