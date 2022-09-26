import Paragraph from '@atoms/texts/paragraph'
import Image from '@atoms/images/image'
import logoSL from './second life.png'
import valombreuse from './domaine projet.jpg'
import club from './Photo club.jpg'
import React from 'react'

function HomePage () {
  return (
    <section>
      <span className='flex items-center justify-center'><Image src={logoSL} alt='logo second life' size='w-16 h-8 mr-4' />
        <Paragraph>Bienvenue sur le site de gestion de location et de club second life</Paragraph></span>
      <div className={`
           flex justify-center items-center sm:flex-col mt-7 md:flex-row mt-16
          `}
      >
        <Image src={valombreuse} alt='logo second life' size='sm:w-64 h-32 my-8 md:w-64 h-40 mx-8 lg:w-80 h-48' />
        <Image src={club} alt='logo second life' size='sm:w-64 h-32 my-8 md:w-50 h-40 mx-8 lg:w-80 h-48' />
      </div>
    </section>
  )
}

export default HomePage
