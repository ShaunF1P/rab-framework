// RAB Framework - Supabase Configuration
// Project: RAB Framework (epxjcrlqgqvgglpohujv)

const SUPABASE_URL = 'https://epxjcrlqgqvgglpohujv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweGpjcmxxZ3F2Z2dscG9odWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMTA4MjksImV4cCI6MjA5MTg4NjgyOX0.CQ2CyZPcw2ILdDe7w6kJLAesJIklwl3XZIKwl2t6tcc';

// Initialize Supabase client — use window.supabaseClient to avoid CDN name collision
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Cloud server URL (for webhooks, PDF generation)
const CLOUD_SERVER_URL = '';
