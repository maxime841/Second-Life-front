import { Store } from '@store/store'
import React from 'react'
import { useParams } from 'react-router-dom'

export function LandPage () {
  const { idLand } = useParams()
  const land = Store.land.useLand(idLand!)
  return (
    <div>
      {
        land.id
          ? <section>
            <h1 className='text-center font-title text-3xl'>{land.name}</h1>
            <div className='flex justify-center'>
              <p className='font-text
              text-justify
              border-2
              border-none
              bg-fond-cards
              w-fit
              p-5
              mt-8
              mb-8
              rounded-lg'>{land.description}</p>
            </div>
            <div className='card w-96 bg-fond-cards shadow-xl font-text'>
              <figure><img src='https://placeimg.com/400/225/arch' alt='Shoes' /></figure>
              <div className='card-body'>
                <h2 className='card-title'>Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='card-actions justify-end'>
                  <button className='btn bg-fond_color_button hover:bg-action-bg-hover'>Buy Now</button>
                </div>
              </div>
            </div>
          </section>
          : <p>Loading data ...</p>
      }
    </div>
  )
}
// ici attention car on a un observable quon utilise pas au final
// donc il faudra pense à couper le subscripbe dans le hook
// yes pas de soucis dans ce cas ;-)

// autre chose comme la data ne va pas arriver maintenant il nous faut faire attendre
// l'interface user du coup il faut un spinner
// là il est tard on va pas faire maintenant
// on va mettre un text à la place mais faudra pas oublier de changer ;-) pas de soucis
// sauf si ailleur on va le use je sais pas encore YES j'en ai un simple
// ok demain j'y penserai et j'ai vu que tu en avais fais deja un
// vasi test
