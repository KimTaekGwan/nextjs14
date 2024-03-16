import { createClient } from "@/src/supabase/server"

export default async function Page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from("notes").select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}