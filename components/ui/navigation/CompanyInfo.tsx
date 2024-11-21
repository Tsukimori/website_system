//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (
      <Image
        src="/common/logo.svg" // ロゴ画像のパスを指定
        alt="MARC税理士事務所"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyPostalCode: "107-0062",
    companyAddress: "東京都港区南青山4-17-33グランカーサ南青山2F",
    companyTel: "03-6455-5380",
    companyTelHref: "tel:0364555380",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
