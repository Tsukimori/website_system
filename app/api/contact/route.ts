import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// 環境変数を使用
const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_TO, // 管理者宛のメール
} = process.env

export async function POST(req: Request) {
  try {
    const {
      inquiryType = "",
      company,
      department = "",
      lastName,
      firstName,
      email,
      phone,
      contactMethod = "",
      message,
    } = await req.json()

    // 必須項目のバリデーション（任意項目は除外）
    const requiredFields = [lastName, firstName, email, phone, message]
    if (requiredFields.some((field) => !field || field.trim() === "")) {
      return NextResponse.json(
        { error: "すべての必須項目を入力してください。" },
        { status: 400 }
      )
    }

    // Nodemailer の設定
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_PORT === "465", // ポート465の場合はtrue
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    // メール本文を組み立てる
    let emailBody = ""

    if (inquiryType) {
      const inquiryTypeText =
        inquiryType === "general"
          ? "工事に関するお問い合わせ"
          : inquiryType === "recruit"
          ? "求人に関するお問い合わせ"
          : ""
      emailBody += `【お問い合わせ種別】 ${inquiryTypeText}\n`
    }

    if (company) emailBody += `会社名: ${company}\n`
    if (department) emailBody += `部署: ${department}\n`
    emailBody += `姓: ${lastName}\n`
    emailBody += `名: ${firstName}\n`
    emailBody += `メール: ${email}\n`
    emailBody += `電話番号: ${phone}\n`

    if (contactMethod) {
      const contactMethodTextMap: Record<string, string> = {
        email: "メール",
        phone: "電話",
        meeting: "オンラインミーティング",
      }
      const contactMethodText = contactMethodTextMap[contactMethod] || ""
      emailBody += `希望の連絡方法: ${contactMethodText}\n`
    }

    emailBody += `メッセージ:\n${message}\n`

    // ① 管理者宛のメール
    const adminMailOptions = {
      from: `"お問い合わせフォーム" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "【お問い合わせ】新しいメッセージが届きました",
      text: emailBody,
      replyTo: email,
    }

    // ② ユーザー宛の確認メール
    let userEmailBody = `${lastName} ${firstName} 様\n\nお問い合わせありがとうございます。\n以下の内容で受け付けました。\n\n------------------\n`
    userEmailBody += emailBody
    userEmailBody += "\n------------------\n\n担当者が確認後、ご連絡いたします。\n\nよろしくお願いいたします。"

    const userMailOptions = {
      from: `"株式会社アセットビジョン"`,
      to: email,
      subject: "【自動返信】お問い合わせありがとうございます。",
      text: userEmailBody,
      replyTo: EMAIL_USER,
    }

    // 2通のメールを並列送信
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    return NextResponse.json(
      { message: "メールが正常に送信されました。" },
      { status: 200 }
    )
  } catch (error) {
    console.error("メール送信エラー:", error)
    return NextResponse.json(
      { error: "メール送信に失敗しました。" },
      { status: 500 }
    )
  }
}
