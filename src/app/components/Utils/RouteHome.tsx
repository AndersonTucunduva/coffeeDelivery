'use client'

import Link from 'next/link'
import Image from 'next/image'

export function RouteHome() {
  return (
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
  )
}
