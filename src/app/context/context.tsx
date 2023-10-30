'use client'

import { ReactNode, createContext, useState } from 'react'

interface sellProviderProps {
  children: ReactNode
}

interface sellProps {
  id: number
  Name: string
  img: string
  qtde: number
  Price: number
}

interface buyerProps {
  cep: number
  rua: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

interface sellContextProps {
  sell: sellProps[]
  setSell: React.Dispatch<React.SetStateAction<sellProps[] | null>>
  buyer: buyerProps[]
  setBuyer: React.Dispatch<React.SetStateAction<sellProps[] | null>>
}

export const SellContext = createContext({} as sellContextProps)

export const SellProvider = ({ children }: sellProviderProps) => {
  const [sell, setSell] = useState<sellProps[]>([])
  const [buyer, setBuyer] = useState<buyerProps[]>([])

  return (
    <SellContext.Provider value={{ sell, setSell, buyer, setBuyer }}>
      {children}
    </SellContext.Provider>
  )
}
