interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminMainLayout = async ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default AdminMainLayout
