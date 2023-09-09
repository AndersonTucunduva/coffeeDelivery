import { Product } from './components/Product'
import { Slogan } from './components/Slogan'
import { baloo2 } from './fonts'

export default function Home() {
  return (
    <>
      <Slogan />
      <div className={`px-40 text-3xl font-bold ${baloo2.className}`}>
        <h1>Nossos Cafés</h1>
        <div className="mt-14 grid grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  )
}
