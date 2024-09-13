import PageContainer from "@/components/ui/frame/PageContainer"

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminMainLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <PageContainer>{children}</PageContainer>
    </>
  )
}

export default AdminMainLayout
