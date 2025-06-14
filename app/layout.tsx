import "./globals.css"
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Omotunde-Young Qudus | Digital Marketing Specialist",
  description: "Digital Marketing Specialist with expertise in strategy, content creation, and performance marketing.",
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
