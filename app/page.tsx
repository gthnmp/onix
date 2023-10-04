import { MongoClient } from "mongodb"
import { connectDB } from "@/lib/utils"

export default async function Home() {
  connectDB()
  return (
    <main>
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center text-4xl font-semibold tracking-wide">
        <h1>
          Onix Fragrance Website 
        </h1>
        <span className="text-xl font-light">
          Powered by NextJS, MongoDB, and Docker
        </span>
      </div>
    </main>
  )
}
