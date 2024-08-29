interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminMainLayout = ({ children }: AdminLayoutProps) => {
  return <div>{children}</div>
}

export default AdminMainLayout
