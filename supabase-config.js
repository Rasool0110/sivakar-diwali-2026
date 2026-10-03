// Sivakar Supabase configuration
// Fill these two values after creating your Supabase project.
const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY_HERE";
const SHOP = { name: "Sivakar", whatsapp: "", phone: "", address: "" };

function isSupabaseConfigured(){
  return SUPABASE_URL.startsWith("https://") && SUPABASE_ANON_KEY.length > 20;
}
