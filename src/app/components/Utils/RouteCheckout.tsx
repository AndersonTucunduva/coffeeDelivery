'use client'

import Link from 'next/link'
import { ShoppingCartIcon } from 'lucide-react'
import { useContext } from 'react'
import { SellContext } from '@/app/context/context'

export function RouteCheckout() {
  const { sell } = useContext(SellContext)

  return (
    <div>
      <Link href={'/checkout'}>
        <button className="mr-3 flex h-10 w-10 rounded bg-yellowlight  p-2">
          <ShoppingCartIcon className="text-yellowdark" />
        </button>
      </Link>
      <div>
        <h1 className="-mt-16 ml-5 rounded-full bg-yellowdark p-1 text-center text-white">
          {sell.length}
        </h1>
      </div>
    </div>
  )
}
