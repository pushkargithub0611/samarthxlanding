
import { createClient } from '@supabase/supabase-js';

// Get these values from your Supabase project settings -> API section
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
