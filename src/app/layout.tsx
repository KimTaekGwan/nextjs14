import { GeistSans } from "geist/font/sans"
import "./globals.css"
import AuthButton from "../components/AuthButton"
import DeployButton from "../components/DeployButton"
import { createClient } from "@/supabase/server"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeButton } from "@/components/ThemeButton"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
}

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
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
              <DeployButton />
              <ThemeButton />
              {isSupabaseConnected && <AuthButton />}
            </div>
          </nav>
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
          <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
            <p>
              Powered by{" "}
              <a
                href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
              >
                Supabase
              </a>
            </p>
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      <GoogleTagManager gtmId={process.env.GOOGLE_TAGMANAGER_ID || ""} />
    </html>
  )
}
