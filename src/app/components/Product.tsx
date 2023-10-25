import Image from 'next/image'
import { baloo2 } from '../fonts'
import { ShoppingCartIcon } from 'lucide-react'
import { Increment } from './Utils/Increment'

interface productProps {
  id: number
  Name: string
  Category: string
  img: string
  Description: string
  Price: string
}

export function Product({
  Name,
  Category,
  img,
  Description,
  Price,
}: productProps) {
  return (
    <>
      <div className="mb-10 flex h-[310px] min-w-[256px] max-w-[256px] flex-col items-center justify-center rounded-bl-[36px] rounded-tr-[36px] bg-basecard px-5">
        <div>
          <Image
            src={img}
            alt={Name}
            width={120}
            height={120}
            className="-mt-14"
          />
        </div>
        <h2 className="mt-2 rounded-[100px] bg-yellowlight p-1 text-xs font-bold text-yellowdark">
          {Category}
        </h2>
        <h1
          className={`mt-4 p-1
         text-xl font-bold ${baloo2.className}`}
        >
          {Name}
        </h1>
        <h2 className="text-sm text-baselabel">{Description}</h2>
        <div className="flex">
          <div className="mt-8 flex items-baseline justify-center">
            <h1 className="mr-1 text-xs">R$</h1>
            <p className={`text-xl font-bold ${baloo2.className}`}>{Price}</p>
          </div>
          <div className="ml-2 flex items-end justify-center">
            <Increment />
          </div>

          <button className="ml-2 mt-5 h-10 w-10 rounded bg-purple hover:bg-purpledark">
            <ShoppingCartIcon className="m-auto h-4 w-4 flex-1 text-basecard" />
          </button>
        </div>
      </div>
    </>
  )
}
