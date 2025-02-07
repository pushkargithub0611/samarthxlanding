
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ydysvpsifsixhrczheqa.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkeXN2cHNpZnNpeGhyY3poZXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5NDg0ODIsImV4cCI6MjA1NDUyNDQ4Mn0.of8uMlx2ipeOnYUYcBlHAb7IBVBywJnV3JUWtc07Q_0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
