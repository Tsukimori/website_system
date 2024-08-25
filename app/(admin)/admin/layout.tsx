import Navigation from "@/components/admin/Nvigation"

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout = async ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default AdminLayout
