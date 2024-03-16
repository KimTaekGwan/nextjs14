import CTASection from "@/components/CTASection"
import About from "../components/About"

export default async function Index() {
  return (
    // <div className="flex-1 w-full flex flex-col gap-20 items-center">
    <div>
      <About />
      <CTASection />
    </div>
  )
}
