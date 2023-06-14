import { GithubLogo } from '@phosphor-icons/react'
import { SignInButtonContainer } from '../../styles/components/signInButton'

export function SignInButton() {
  return (
    <SignInButtonContainer>
      <GithubLogo size={24} weight="duotone" />
      Entrar com Github
    </SignInButtonContainer>
  )
}
