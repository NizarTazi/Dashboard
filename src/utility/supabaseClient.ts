import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://bxosspitbadohkvyzvdw.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4b3NzcGl0YmFkb2hrdnl6dmR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDUwODUsImV4cCI6MjA0MzM4MTA4NX0.lbFp4z0OwPvq_ggzEzjNrUwPFnvc8vhXPpevprX0LBs";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
