import { RouteHome } from './Utils/RouteHome'
import { MapPin } from 'lucide-react'
import { RouteCheckout } from './Utils/RouteCheckout'

export function Header() {
  return (
    <>
      <header className="mt-8 flex h-24 justify-between px-40">
        <RouteHome />
        <div className="flex ">
          <div className="mr-2 flex h-10 w-28 rounded-lg bg-purplelight p-2">
            <MapPin className="text-purple" />
            <h1 className="text-purpledark">Tupã, SP</h1>
          </div>
          <RouteCheckout />
        </div>
      </header>
    </>
  )
}
