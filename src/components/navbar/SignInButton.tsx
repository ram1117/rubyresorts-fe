import Link from 'next/link'
import { Button } from '../ui/button'

const SignInButton = () => (
  <Button variant={'secondary'} asChild className="px-8">
    <Link href="/auth/signin">Sign In</Link>
  </Button>
)

export default SignInButton
