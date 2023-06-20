import { HeaderContainer } from '../../styles/components/header'
import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <HeaderContainer>
      <strong>SC</strong>

      <nav>
        <ActiveLink href="/" text="Ínicio" />
        <ActiveLink href="/dados" text="Dados" />
        <ActiveLink href="/blog" text="Bog" />
      </nav>

      <SignInButton />
    </HeaderContainer>
  )
}
