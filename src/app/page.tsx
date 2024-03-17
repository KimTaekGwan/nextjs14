import CTASection from "@/components/CTASection"
import About from "@/components/About"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default async function Index() {
  return (
    // <div className="flex-1 w-full flex flex-col gap-20 items-center">
    <div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m James
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my blog template. Built using tailwind, shadcn, velite
            and Nextjs 14.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <About />
      <CTASection />
    </div>
  )
}
