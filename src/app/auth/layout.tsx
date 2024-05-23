interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-main-bg bg-no-repeat bg-cover text-light-text">
      {children}
    </section>
  )
}

export default AuthLayout
