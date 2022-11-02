import getProviders from "next-auth/react"

export default function signin() {
  return (
    <div>
                <img src="/twitter.png" alt="twitter image " height={0.02} />
                <h1> Hello Signin</h1>
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