import Link from 'next/link'
import { HeaderContainer } from '../../styles/components/header'
import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <HeaderContainer>
      <strong>OC.</strong>

      <nav>
        <Link href="/">Inícios</Link>
        <Link href="/">Postagens</Link>
        <Link href="/">Fale conosco</Link>
      </nav>

      <SignInButton />
    </HeaderContainer>
  )
}
