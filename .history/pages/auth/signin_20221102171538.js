import getProviders from "next-auth/react"

export default function signin() {
  return (
    <div>

    </div>
  )
}


export async function getServerSideRendering() {
    const providers = await getProviders();
}