interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="min-h-screen w-full pt-16 lg:pt-24 text-dark-text">
      {children}
    </section>
  )
}

export default Layout
