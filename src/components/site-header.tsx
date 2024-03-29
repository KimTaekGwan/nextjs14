import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"
import AuthButton from "./AuthButton"
import { createClient } from "@/supabase/server"

export function SiteHeader() {
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
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ModeToggle />
            {isSupabaseConnected && <AuthButton />}
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}
