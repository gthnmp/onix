import Link from "next/link"
import LogoSquare from "./LogoSquare"
import Search from "./Search"

type Menu = {
  title : string,
  path : string
}

const menu = [
  {
    title : "Special Offers",
    path : "/"
  },
  {
    title : "Collections",
    path : "/"
  },
]

export default function Navbar () {
  return(
    <nav className="sticky top-0 flex items-center justify-between p-4 lg:px-6 w-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              Onix Fragrance
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
      </div>
    </nav>
  )
}
