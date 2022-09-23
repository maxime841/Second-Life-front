import React from 'react'
import { TInput } from '@types-app/input.type'
import Input from '@atoms/inputs/input'
import MagnifyingGlassIcon from '@atoms/icons/magnifying-glass-icon'

/**
 * SearchBar
 * @param children JSX.Element | JSX.Element[] | string | string[]
 * @returns
 */

function SearchBar ({
  children
}: TInput) {
  return (
    <div className={`
    flex items-center
    rounded-lg
    bg-fond_claire
    `}
    >
      <MagnifyingGlassIcon />
      <Input
        value=''
        placeholder='Veuillez saisir votre recherche'
        setValueInput={onchange}
        // eslint-disable-next-line react/no-children-prop
        children={children}
      />
    </div>
  )
}

export default SearchBar
