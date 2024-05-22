import SignoutAction from '@/actions/auth/signout.action'
import { Button } from '../ui/button'

const SignOutButton = () => {
  return (
    <form action={SignoutAction}>
      <Button variant={'secondary'} className="px-8" type="submit">
        Sign Out
      </Button>
    </form>
  )
}

export default SignOutButton
