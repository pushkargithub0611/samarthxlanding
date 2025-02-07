
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anon key from the Supabase dashboard
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
