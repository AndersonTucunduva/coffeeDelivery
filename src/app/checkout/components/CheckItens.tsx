import { priceFormatter } from '@/app/utils/formatter'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface itensProps {
  Name: string
  img: string
  Price: number
  qtde: number
}

export function CheckItens({ Name, img, Price, qtde }: itensProps) {
  const [qtd, setQtde] = useState(qtde)

  function handleIncrementQtde() {
    setQtde(qtd + 1)
  }

  function handleDecrementQtde() {
    if (qtd === 1) {
      setQtde(1)
    } else {
      setQtde(qtd - 1)
    }
  }

  return (
    <>
      <div className="mt-6 flex">
        <div>
          <Image src={img} alt="cafe tradicional" width={64} height={64} />
        </div>
        <div className="ml-5 mr-10">
          <h1 className="text-base text-basesubtitle">{Name}</h1>
          <div className="flex">
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
                value={qtd}
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
            <button className="ml-2 flex h-10 w-24 items-center justify-center rounded-md bg-basebutton text-xs text-basetext hover:bg-basehover">
              <Trash2 width={16} height={16} className="mr-1 text-purple" />
              REMOVER
            </button>
          </div>
        </div>
        <div className="text-base font-bold text-basetext">
          {priceFormatter.format(Price)}
        </div>
      </div>
      <div className="mt-6 border border-basebutton"></div>
    </>
  )
}
