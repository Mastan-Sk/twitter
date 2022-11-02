import getProviders from "next-auth/react"

export default function signin() {
  return (
    <div>
                <img src="" alt="" className="" />
                
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