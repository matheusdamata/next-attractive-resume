import Link from 'next/link'
import { HeaderContainer } from '../../styles/components/header'
import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <HeaderContainer>
      <strong>OC.</strong>

      <nav>
        <Link href="/">Início</Link>
        <Link href="/">Blog</Link>
      </nav>

      <SignInButton />
    </HeaderContainer>
  )
}
