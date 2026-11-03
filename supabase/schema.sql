create table if not exists public.rsvps (
 id uuid primary key default gen_random_uuid(),
 created_at timestamptz not null default now(),
 name text not null check (char_length(name) between 1 and 120),
 attendance text not null check (attendance in ('yes','no')),
 guests integer not null check ((attendance='yes' and guests between 1 and 6) or (attendance='no' and guests=0)),
 dietary text not null default '' check (char_length(dietary)<=500),
 message text not null default '' check (char_length(message)<=1000)
);
alter table public.rsvps enable row level security;
revoke all on public.rsvps from anon, authenticated;
-- Only the server's service role can write/read. View replies in Supabase Table Editor.
