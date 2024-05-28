import SignoutAction from '@/actions/auth/signout.action'
import { Button } from '../ui/button'

const SignOutButton = () => {
  return (
    <form action={SignoutAction}>
      <Button
        variant={'outline'}
        className="px-8 border border-card"
        type="submit"
      >
        Sign Out
      </Button>
    </form>
  )
}

export default SignOutButton
