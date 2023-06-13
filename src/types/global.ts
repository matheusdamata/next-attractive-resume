export type AlertTextProps = {
  text: 'Pré-Lançamento' | 'Lançamento' | 'Disponível'
}

export type UserProps = {
  email: string
  name: string
}

export type PropertyProps = {
  id: number
  alert: string
  category: string
  title: string
  locality: string
  m2: string
  price: string
}

/** *** MenuASide *** **/
export type MenuASideProps = {
  userAdmin: UserProps
}

/** *** HOME *** **/
export type HomeProps = {
  properties: PropertyProps[]
}

/** *** DASHBOARD *** **/
export type DashboardProps = {
  loggedUser: UserProps
}

/** *** CRIAR *** **/
export type CreateProps = {
  loggedUser: UserProps
}
