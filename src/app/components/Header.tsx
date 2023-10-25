import { ShoppingCartIcon, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="mt-8 flex h-24 justify-between px-40">
        <div>
          <Link href={'/'}>
            <button>
              <Image
                src="/coffee_icone.svg"
                alt="coffe icone"
                width={85}
                height={40}
                priority
              />
            </button>
          </Link>
        </div>
        <div className="flex ">
          <div className="flex h-10 w-28 rounded-lg bg-purplelight p-2">
            <MapPin className="text-purple" />
            <h1 className="text-purpledark">Tupã, SP</h1>
          </div>
          <Link href={'/checkout'}>
            <button className="ml-3 h-10 w-10 rounded bg-yellowlight p-2">
              <ShoppingCartIcon className="text-yellowdark" />
            </button>
          </Link>
          <div>
            <h1 className="-m-4 rounded-full bg-yellowdark p-1 text-center text-white">
              1
            </h1>
          </div>
        </div>
      </header>
    </>
  )
}
