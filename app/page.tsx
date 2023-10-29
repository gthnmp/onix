import { Suspense } from "react"
import Image from "next/image"
import dataset from '@/dataset.json'

function ThreeItems () {
  return(
    <section className="w-screen h-screen grid grid-cols-8 grid-rows-2 gap-4 p-4">
      <div className="w-full h-full bg-neutral-800 row-span-2 col-span-6 rounded-xl">
      </div>
      <div className="w-full h-full bg-neutral-800 col-span-2 rounded-xl">
      </div>
      <div className="w-full h-full bg-neutral-800 col-span-2 rounded-xl">
      </div>
    </section>
  )
}

function Carousel () {
  const carouselProducts = [...dataset]
  return(
    <section className="w-full overflow-x-auto h-60 p-4">
      <ul className="flex animate-carousel gap-4 h-full">
        {carouselProducts.map((product, i) => (
          <li key={i} className="relative aspect-square h-[30vh] max-h-[275px] w-full max-w-[20rem] flex-none md:w-1/3 bg-neutral-800 rounded-xl">
            <Image draggable={false} src={product.images} alt="Onix" width={1920} height={1080} className="w-full h-full object-cover"/>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Footer () {
  return(
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
      </div>
    </footer>
  )
}

export default async function Home() {
  return (
    <>
      <ThreeItems />
      <Carousel/>
      <Suspense>
        <Footer/>
      </Suspense>
    </>
  )
}
