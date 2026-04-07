import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!

// Server-side only — never import this in client components
export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey)

export type Client = {
  id: string
  clerk_user_id: string
  nom: string
  empresa: string
  email: string
  pla: 'puntual' | 'recurrent'
  notes_internes: string | null
}

export type Directe = {
  id: string
  client_id: string
  data: string
  titol: string
  tipus: 'lanzamiento' | 'corporativo' | 'webinar'
  assistents: number | null
  durada_min: number | null
  vod_url: string | null
  backup_url: string | null
  setup_notes: string | null
  estat: 'programat' | 'fet' | 'cancel·lat'
}
