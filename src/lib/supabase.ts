import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export type Database = {
  public: {
    Tables: {
      questions: {
        Row: {
          id: string
          created_at: string
          text: string
          user_id: string | null
          likes: number
        }
        Insert: {
          id?: string
          created_at?: string
          text: string
          user_id?: string | null
          likes?: number
        }
        Update: {
          id?: string
          created_at?: string
          text?: string
          user_id?: string | null
          likes?: number
        }
      }
    }
  }
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey) 