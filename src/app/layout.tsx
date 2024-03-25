import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"

import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"

import { SiteHeader } from "@/components/site-header"
import { Providers } from "@/components/providers"
import { siteConfig } from "@/config/site"
import { SiteFooter } from "@/components/site-footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <meta
        name="naver-site-verification"
        content="a9184199b536a81f98557c8e8d780177d6ec22ff"
      />
      <meta
        name="google-site-verification"
        content="4KRskaAvzCRHMPfW4vexmYl8tPkK_6f6kRcWhse1k9w"
      />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground",
          inter.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      <GoogleTagManager gtmId={process.env.GOOGLE_TAGMANAGER_ID || ""} />
    </html>
  )
}
