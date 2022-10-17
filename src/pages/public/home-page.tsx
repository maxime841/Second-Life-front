import Paragraph from '@atoms/texts/paragraph'
import Image from '@atoms/images/image'
import logoSL from '../../assets/second life.png'
import valombreuse from '../../assets/domaine projet.jpg'
import club from '../../assets/Photo club.jpg'
import React, { useState } from 'react'
import SearchBar from '@molecules/inputs/search-bar'
import { ContainerPrimary } from '@atoms/containers/container-primary/container-primary'
import { EmodelContainer } from '@atoms/containers/container-primary/container-primary.type'

function HomePage() {
  const [search, setSearch] = useState('')
  return (
    <section>
      {/* search bar */}
      <ContainerPrimary
        addClass='py-2 px-4 mx-auto mb-8 sm:hidden'
        model={EmodelContainer.fit}>
        <SearchBar
          addClass='flex'
          value={search}
          placeholder=''
          setValueInput={setSearch}>
          <span>Barre de recherche</span>
        </SearchBar>
      </ContainerPrimary>

      <span className='flex items-start justify-center max-w-sm sm:max-w-md lg:max-w-lg mx-auto h-fit'>
        <p className='font-bold text-center text-xl md:text-2xl leading-6'>
          Bienvenue sur le site de gestion de location et de club second life
        </p>
      </span>
      <div
        className={`
           flex justify-center items-center flex-col mb-10 mt-16
          `}>
        <Image
          src={valombreuse}
          alt='logo second life'
          size='object-cover w-64 sm:w-72 md:w-7/12 lg:w-7/12 h-56 lg:h-96 mb-16'
        />
        <Image
          src={club}
          alt='logo second life'
          size='object-cover w-64 sm:w-72 md:w-7/12 lg:w-7/12 h-56 lg:h-96'
        />
      </div>
    </section>
  )
}

export default HomePage
