'use client'

import Image from 'next/image'
import { baloo2 } from '../fonts'
import { ShoppingCartIcon } from 'lucide-react'
import { useContext, useState } from 'react'
import { SellContext } from '../context/context'
import { priceFormatter } from '../utils/formatter'

interface productProps {
  id: number
  Name: string
  Category: string
  img: string
  Description: string
  Price: number
  qtde?: number
}

export function Product({
  id,
  Name,
  Category,
  img,
  Description,
  Price,
}: productProps) {
  const [qtde, setQtde] = useState(1)

  function handleIncrementQtde() {
    setQtde(qtde + 1)
  }

  function handleDecrementQtde() {
    if (qtde === 1) {
      setQtde(1)
    } else {
      setQtde(qtde - 1)
    }
  }

  const { sell, setSell } = useContext(SellContext)

  function carSell() {
    setSell([...sell, { id, Name, qtde, img, Price }])
  }

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
            <p className={`text-xl font-bold ${baloo2.className}`}>
              {priceFormatter.format(Price)}
            </p>
          </div>
          <div className="ml-2 flex items-end justify-center">
            <button
              className="h-10 w-6 rounded-l bg-basebutton text-purpledark hover:text-purple"
              type="button"
              onClick={handleDecrementQtde}
            >
              -
            </button>
            <input
              className="h-10 w-9 bg-basebutton p-2 text-basetitle"
              type="text"
              value={qtde}
              onChange={(e) => setQtde(Number(e.target.value))}
            />
            <button
              className="h-10 w-6 rounded-r bg-basebutton text-purpledark hover:text-purple"
              onClick={handleIncrementQtde}
              type="button"
            >
              +
            </button>
          </div>

          <button
            onClick={carSell}
            className="ml-2 mt-5 h-10 w-10 rounded bg-purpledark hover:bg-purple"
          >
            <ShoppingCartIcon className="m-auto h-4 w-4 flex-1 text-basecard" />
          </button>
        </div>
      </div>
    </>
  )
}
