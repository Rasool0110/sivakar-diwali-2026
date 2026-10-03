// Sivakar Supabase configuration
// Fill these two values after creating your Supabase project.
const SUPABASE_URL = "https://qgcbwrqfppjldoxschjd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_zB7r7s-CM99BJFUJLR985Q_-3ndUWaX";
const SHOP = { name: "Sivakar", whatsapp: "", phone: "", address: "" };

function isSupabaseConfigured(){
  return SUPABASE_URL.startsWith("https://") && SUPABASE_ANON_KEY.length > 20;
}
