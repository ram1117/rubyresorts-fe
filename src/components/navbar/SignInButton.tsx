import Link from 'next/link'
import { Button } from '../ui/button'

const SignInButton = () => (
  <Button variant={'outline'} asChild className="px-8 border border-card">
    <Link href="/auth/signin">Sign In</Link>
  </Button>
)

export default SignInButton
