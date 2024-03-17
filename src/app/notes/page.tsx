import { createClient } from "@/supabase/server"
import { Octokit } from "octokit"

const owner = process.env.GITHUB_CLIENT_OWNER
const repo = process.env.GITHUB_CLIENT_REPO
const token = process.env.GITHUB_CLIENT_TOKEN
const path = "Cards/OKR - 연결 필요.md"

// 출처: https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem.
function base64ToBytes(base64: string) {
  const binString = atob(base64)
  const bytes = Array.from(binString, (m) => m.codePointAt(0)).filter(
    (byte) => byte !== undefined
  )
  return Uint8Array.from(bytes as number[])
}

// 출처: https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem.
function bytesToBase64(bytes: Uint8Array) {
  const binString = String.fromCodePoint(...Array.from(bytes))
  return btoa(binString)
}

export default async function Page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from("notes").select()
  // return <pre>{JSON.stringify(notes, null, 2)}</pre>

  const directoryData = await fetchGitHubDirectory(
    owner ?? "",
    repo ?? "",
    path ?? ""
  )
  const decodedData = new TextDecoder().decode(
    base64ToBytes((directoryData as { content: string }).content)
  )
  // console.log(decodedData)
  return <pre className="container py-24 sm:py-32 max-w-4xl">{decodedData}</pre>
}

const octokit = new Octokit({
  auth: token,
})

async function fetchGitHubDirectory(owner: string, repo: string, path: string) {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: owner,
      repo: repo,
      path: path,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )
  const data = response.data
  return data
}
