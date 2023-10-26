'use client'

import { ReactNode, createContext, useState } from 'react'

interface sellProviderProps {
  children: ReactNode
}

interface sellProps {
  Name: string
  img: string
  qtde: number
  Price: string
}

interface sellContextProps {
  sell: sellProps[]
  setSell: React.Dispatch<React.SetStateAction<sellProps[] | null>>
}

export const SellContext = createContext({} as sellContextProps)

export const SellProvider = ({ children }: sellProviderProps) => {
  const [sell, setSell] = useState<sellProps[]>([])

  return (
    <SellContext.Provider value={{ sell, setSell }}>
      {children}
    </SellContext.Provider>
  )
}
