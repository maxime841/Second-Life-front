/**
 * type for error component
 */
export type Terror = {
  children?: JSX.Element | JSX.Element[] | string | string[]
  position?: string
}

/**
 * enum for string of error of all app
 */
export enum Eerror {
  LOGIN = 'Erreur de connexion',
  FORGOT_PASSWORD = 'Une Erreur est survenue',
  UPDTATE_PROFIL = 'Votre profil a bien etait modifie',
  UPDATE_PASSWORD = 'Votre mot de passe a bien etait modifie',
}
