interface LayoutProps {
  children: React.ReactNode
}

const RoomsLayout = ({ children }: LayoutProps) => {
  return (
    <section className="w-full min-h-screen pt-16 text-dark-text bg-section-light">
      {children}
    </section>
  )
}

export default RoomsLayout
