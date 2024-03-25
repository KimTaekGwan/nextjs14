import Link from "next/link"

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  let header = (
    <header>
      <Link href={"/"}>
        <h1>{"<-"} Blog Main</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>Posts Layout Footer</p>
    </footer>
  )
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  )
}
