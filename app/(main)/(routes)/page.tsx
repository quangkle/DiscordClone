import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
    
      <p className='text-3xl font-bold text-indigo-500'>
        Hello discord
      </p>
    </>
  )
}
