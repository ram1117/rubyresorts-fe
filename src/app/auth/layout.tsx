interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center">
      {children}
    </section>
  )
}

export default AuthLayout
