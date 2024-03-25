import PostCard from "@/components/PostCard"
import getPostMetadata from "@/utils/getPostMetadata"

export default function Page() {
  const postMetadata = getPostMetadata("data")
  console.log(postMetadata)

  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />
        })}
      </div>
    </main>
  )
}
