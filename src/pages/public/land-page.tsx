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
            <h1>{land.id}</h1>
            <p>{land.descriptions}</p>
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
