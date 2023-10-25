import { Increment } from '@/app/components/Utils/Increment'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'

export function CheckItens() {
  return (
    <>
      <div className="mt-6 flex">
        <div>
          <Image
            src={'/cafeTradicional.svg'}
            alt="cafe tradicional"
            width={64}
            height={64}
          />
        </div>
        <div className="ml-5 mr-10">
          <h1 className="text-base text-basesubtitle">Expresso Tradicional</h1>
          <div className="flex">
            <Increment />
            <button className="ml-2 flex h-10 w-24 items-center justify-center rounded-md bg-basebutton text-xs text-basetext hover:bg-basehover">
              <Trash2 width={16} height={16} className="mr-1 text-purple" />
              REMOVER
            </button>
          </div>
        </div>
        <div className="text-base font-bold text-basetext">R$ 9,90</div>
      </div>
      <div className="mt-6 border border-basebutton"></div>
    </>
  )
}
