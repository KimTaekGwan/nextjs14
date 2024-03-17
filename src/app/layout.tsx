import { GeistSans } from "geist/font/sans"
import "./globals.css"
import AuthButton from "@/components/AuthButton"
import DeployButton from "@/components/DeployButton"
import { createClient } from "@/supabase/server"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeButton } from "@/components/ThemeButton"

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
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient()
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()
  return (
    <html lang="en" className={GeistSans.className}>
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
