import Paragraph from '@atoms/texts/paragraph'
import Image from '@atoms/images/image'
import React from 'react'

function HomePage () {
  return (
    <section>
      <Paragraph>Bienvenue sur le site de gestion de location et de club second life</Paragraph>
      <div className={`
           sm:flex-col 
           items-center 
           md:flex 
           justify-center 
           flex-row
          `}
      >
        <Image src='images/second life.png' alt='icone second life' size='w-68 h-48' />
      </div>
    </section>
  )
}

export default HomePage
