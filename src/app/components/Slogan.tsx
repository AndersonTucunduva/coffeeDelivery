import Image from 'next/image'
import { baloo2 } from '@/app/fonts'
import { Coffee, Package, ShoppingCartIcon, Timer } from 'lucide-react'

export function Slogan() {
  return (
    <>
      <header className="h-max[544] mb-24 mt-24 flex justify-between px-40">
        <div className="mr-14">
          <h1
            className={`text-basetitle ${baloo2.className} text-5xl font-bold`}
          >
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="text-basesubtitle text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="mt-16 flex gap-11">
            <div className="flex items-center">
              <ShoppingCartIcon className="bg-yellowdark text-background h-8 w-8 rounded-full p-2" />
              <h3 className="text-basetext ml-2">Compra simples e segura</h3>
            </div>
            <div className="flex items-center">
              <Package className="bg-basetext text-background h-8 w-8 rounded-full p-2" />
              <h3 className="text-basetext ml-2">
                Embalagem mantem o café intacto
              </h3>
            </div>
          </div>
          <div className="mt-5 flex gap-10">
            <div className="flex items-center">
              <Timer className="bg-yellow text-background h-8 w-8 rounded-full p-2" />
              <h3 className="text-basetext ml-2">Entrega rápida e rastreada</h3>
            </div>
            <div className="flex items-center">
              <Coffee className="bg-purple text-background h-8 w-8 rounded-full p-2" />
              <h3 className="text-basetext ml-2">
                O café chega fesquinho até você
              </h3>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/coffe_slogan.svg"
            alt="slogan coffee"
            width={476}
            height={360}
            priority
          />
        </div>
      </header>
    </>
  )
}
