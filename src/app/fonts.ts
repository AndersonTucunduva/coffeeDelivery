import { Roboto, Baloo_2 as baloo } from 'next/font/google'

export const baloo2 = baloo({
  subsets: ['latin'],
  weight: ['600', '800'],
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})
