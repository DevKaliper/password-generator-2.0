import { Button } from "@nextui-org/button"
import Link from "next/link"


function page() {
  return (
    <div className=" w-full h-full my-20 px-10 flex flex-col gap-3 justify-center items-center">
        <h1 className="text-5xl font-semibold">Features added in this version</h1>
        <div className="mt-5">
            <h2 className=" italic text-xl font-semibold">1. Modern and smoother style powered by NextUI</h2>
            <h2 className=" italic text-xl font-semibold">2. Option to exclude special characters</h2>
            <h2 className=" italic text-xl font-semibold">3. Dark and Light Mode</h2>
            <h2 className=" italic text-xl font-semibold">4. Logic to generate password improved</h2>
            

        </div>
        <Button className="hover:scale-105 duration-250 ease-in-out"><Link  href="/">Home</Link></Button>
    </div>
  )
}

export default page