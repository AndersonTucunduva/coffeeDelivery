import {
  Banknote,
  CreditCard,
  DollarSign,
  Landmark,
  MapPin,
} from 'lucide-react'
import { CheckItens } from './components/CheckItens'

export default function Checkout() {
  return (
    <>
      <div className="flex justify-center">
        <div className="mr-8">
          <div className="mb-4 text-lg font-bold">Complete seu pedido</div>

          <div className="h-[372px] w-[640px] rounded-md bg-basecard p-10">
            <div className="flex">
              <MapPin className="text-yellowdark" />
              <h1 className="ml-2 text-base text-basesubtitle">
                Endereço de Entrega
              </h1>
            </div>
            <h2 className="ml-8 text-sm text-basetext">
              Informe o endereço onde deseja receber seu pedido
            </h2>
            <div>
              <div>
                <input
                  type="number"
                  maxLength={8}
                  placeholder="CEP"
                  className="mt-8 h-11 w-48 bg-baseinput p-2 text-sm text-basetext"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Rua"
                  className="mt-4 h-11 w-[560px] bg-baseinput p-2 text-sm text-basetext"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Numero"
                  className="mt-4 h-11 w-48 bg-baseinput p-2 text-sm text-basetext"
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  className="ml-3 mt-4 h-11 w-[352px] bg-baseinput p-2 text-sm text-basetext"
                />
              </div>
              <input
                type="text"
                placeholder="Bairro"
                className="mt-8 h-11 w-48 bg-baseinput p-2 text-sm text-basetext"
              />
              <input
                type="text"
                placeholder="Cidade"
                className="ml-3 mt-4 h-11 w-[276px] bg-baseinput p-2 text-sm text-basetext"
              />
              <input
                type="text"
                maxLength={2}
                placeholder="UF"
                className="ml-3 mt-4 h-11 w-14 bg-baseinput p-2 text-sm text-basetext"
              />
            </div>
          </div>
          <div className="mt-3 h-[207px] w-[640px] rounded-md bg-basecard p-10">
            <div className="flex">
              <DollarSign className="text-purple" />
              <h1 className="ml-2 text-base text-basesubtitle">Pagamento</h1>
            </div>
            <div>
              <h2 className="ml-8 text-sm text-basetext">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h2>
            </div>
            <div className="mt-8 flex">
              <button className="flex h-14 w-44 items-center gap-1 rounded-md bg-basebutton p-4 text-center text-xs text-basetext hover:bg-basehover">
                <CreditCard width={16} height={16} className="text-purple" />
                CARTÃO DE CREDITO
              </button>
              <button className="ml-3 flex h-14 w-44 items-center gap-1 rounded-md bg-basebutton p-4 text-center text-xs text-basetext hover:bg-basehover">
                <Landmark width={16} height={16} className="text-purple" />
                CARTÃO DE CREDITO
              </button>
              <button className="ml-3 flex h-14 w-44 items-center gap-1 rounded-md bg-basebutton p-4 text-center text-xs text-basetext hover:bg-basehover">
                <Banknote width={16} height={16} className="text-purple" />
                DINHEIRO
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 text-lg font-bold">Cafés selecionados</div>
          <div className="h-[498px] w-[448px] rounded-bl-[36px] rounded-tr-[36px] bg-basecard px-10 py-10 pt-4">
            <CheckItens />
            <CheckItens />
            <div className="mt-3 flex justify-between text-basetext">
              <h1 className="text-sm">Total de Itens</h1>
              <h2 className="text-base">R$ 29,70</h2>
            </div>
            <div className="mt-2 flex justify-between text-basetext">
              <h1>Entrega</h1>
              <h2>R$ 3,50</h2>
            </div>
            <div className="mt-2 flex justify-between text-xl font-bold text-basesubtitle">
              <h1>TOTAL</h1>
              <h2>R$ 33,20</h2>
            </div>
            <div>
              <button className="mt-6 h-12 w-96 rounded-md bg-yellow text-white hover:bg-yellowdark">
                Confirmar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
