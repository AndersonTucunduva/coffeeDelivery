import { Product } from './components/Product'
import { Slogan } from './components/Slogan'
import { baloo2 } from './fonts'

export default function Home() {
  const products = [
    {
      id: 1,
      Name: 'Café Tradicional',
      Category: 'Tradicional',
      img: './cafeTradicional.svg',
      Description: 'O tradicional café feito com agua quente e grãos moidos',
      Price: '9,90',
    },
    {
      id: 2,
      Name: 'Café Americano',
      Category: 'Tradicional',
      img: './Cafe_Americano.svg',
      Description: 'Expresso diluído, menos intenso que o tradicional',
      Price: '9,90',
    },
    {
      id: 3,
      Name: 'Café Cremoso',
      Category: 'Tradicional',
      img: './Cafe_Cremoso.svg',
      Description: 'Café expresso tradicional com espuma cremosa',
      Price: '9,90',
    },
    {
      id: 4,
      Name: 'Café Gelado',
      Category: 'Gelado',
      img: './Cafe_Gelado.svg',
      Description: 'Bebida preparada com café expresso e cubos de gelo',
      Price: '9,90',
    },
    {
      id: 5,
      Name: 'Café com Leite',
      Category: 'Com Leite',
      img: './Cafe_Leite.svg',
      Description: 'Meio a meio de expresso tradicional com leite vaporizado',
      Price: '9,90',
    },
    {
      id: 6,
      Name: 'Latte',
      Category: 'Com Leite',
      img: './Cafe_Latte.svg',
      Description: 'Expresso diluído, menos intenso que o tradicional',
      Price: '9,90',
    },
  ]
  return (
    <>
      <Slogan />
      <div className="px-40">
        <h1 className={`text-3xl font-bold ${baloo2.className}`}>
          Nossos Cafés
        </h1>
        <div className="mt-14 grid sm:grid-cols-3 md:grid-cols-4">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                Name={product.Name}
                Category={product.Category}
                img={product.img}
                Description={product.Description}
                Price={product.Price}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
