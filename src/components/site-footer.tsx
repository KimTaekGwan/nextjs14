import { siteConfig } from "@/config/site"
import { Mail } from "lucide-react"
import { Icons } from "./icons"

export function SiteFooter() {
  return (
    <footer>
      <div className="border-t p-6 mb-6 mt-6 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:hello@example.com">
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.instagram}>
            <span className="sr-only">Instagram</span>
            <Icons.instagram className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
          </a>
        </div>
        <div className="p-2 flex text-xs">
          <p>
            Powered by{" "}
            <a
              href="/"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              NextJS 14
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
