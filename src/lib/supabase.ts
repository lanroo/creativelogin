import { createClient } from '@supabase/supabase-js';
// teste
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'anon-key';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);