import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from "react"
import fs from "fs"
import matter from "gray-matter"

function getPostContent(slug: any) {
  const folder = "data/"
  const file = folder + `${decodeURI(slug)}.md`

  const content = fs.readFileSync(file, "utf8")

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("data")
  return posts.map((post) => ({ slug: post.slug }))
}

// export async function generateMetadata({ params, searchParams }) {
//   const id = params?.slug ? " ⋅ " + params?.slug : ""
//   return {
//     title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
//   }
// }

export default function PostsPage(props: { params: { slug: any } }) {
  const slug = props.params.slug
  const post = getPostContent(slug)
  console.log(post)
  return (
    <main>
      <h1>{post.data.title}</h1>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  )
}
