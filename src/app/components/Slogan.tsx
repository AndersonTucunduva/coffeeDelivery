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
          <h2 className="text-xl text-basesubtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="mt-16 flex gap-11">
            <div className="flex items-center">
              <ShoppingCartIcon className="h-8 w-8 rounded-full bg-yellowdark p-2 text-background" />
              <h3 className="ml-2 text-basetext">Compra simples e segura</h3>
            </div>
            <div className="flex items-center">
              <Package className="h-8 w-8 rounded-full bg-basetext p-2 text-background" />
              <h3 className="ml-2 text-basetext">
                Embalagem mantem o café intacto
              </h3>
            </div>
          </div>
          <div className="mt-5 flex gap-10">
            <div className="flex items-center">
              <Timer className="h-8 w-8 rounded-full bg-yellow p-2 text-background" />
              <h3 className="ml-2 text-basetext">Entrega rápida e rastreada</h3>
            </div>
            <div className="flex items-center">
              <Coffee className="h-8 w-8 rounded-full bg-purple p-2 text-background" />
              <h3 className="ml-2 text-basetext">
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
