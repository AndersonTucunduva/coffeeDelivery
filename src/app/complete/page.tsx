import { DollarSign, MapPin, Timer } from 'lucide-react'
import Image from 'next/image'
import { baloo2 } from '../fonts'

export default function complete() {
  return (
    <>
      <div className="p-40 ">
        <h1
          className={`text-3xl font-bold text-yellowdark ${baloo2.className}`}
        >
          Uhu! Pedido confirmado
        </h1>
        <h2 className="text-xl text-basesubtitle">
          Agora é só aguardar que logo o café chegará até você
        </h2>
        <div className="mt-10 flex ">
          <div className="rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-gradient-to-t from-yellow to-purple p-1">
            <div className="rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-white p-9">
              <div className="flex gap-3 bg-white text-base text-basetext">
                <MapPin className="h-8 w-8 rounded-full bg-purple text-white" />
                <h1>Entrega em </h1>
                <h2 className="font-bold ">Rua Coroados, nº 1865</h2>
                <h3>Centro - Tupã - SP </h3>
              </div>

              <div className="mt-9 flex gap-3 text-base text-basetext">
                <Timer className="h-8 w-8 rounded-full bg-yellow text-white" />
                <div>
                  <h1>Previsão de Entrega:</h1>
                  <h2 className="font-bold">20 min - 30 min</h2>
                </div>
              </div>
              <div className="mt-9 flex gap-3 text-base text-basetext">
                <DollarSign className="h-8 w-8 rounded-full bg-yellowdark text-white" />
                <div>
                  <h1>Pagamento na entrega</h1>
                  <h2 className="font-bold">Cartão de Credito</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-24">
            <Image
              src={'/illustration.svg'}
              alt="Finalizacao"
              width={492}
              height={293}
            />
          </div>
        </div>
      </div>
    </>
  )
}
