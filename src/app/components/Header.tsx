import { ShoppingCartIcon, MapPin } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <>
      <header className="mt-8 flex h-24 justify-between px-40">
        <div>
          <Image
            src="/coffee_icone.svg"
            alt="coffe icone"
            width={85}
            height={40}
            priority
          />
        </div>
        <div className="flex ">
          <div className="bg-purplelight flex h-10 w-28 rounded-lg p-2">
            <MapPin className="text-purple" />
            <h1 className="text-purpledark">Tupã, SP</h1>
          </div>

          <div className="bg-yellowlight ml-3 h-10 w-10 rounded p-2">
            <ShoppingCartIcon className="text-yellowdark" />
          </div>
        </div>
      </header>
    </>
  )
}
