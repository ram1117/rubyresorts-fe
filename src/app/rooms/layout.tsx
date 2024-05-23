interface LayoutProps {
  children: React.ReactNode
}

const RoomsLayout = ({ children }: LayoutProps) => {
  return (
    <section className="w-full min-h-screen mt-16 border">{children}</section>
  )
}

export default RoomsLayout
