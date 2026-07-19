-- Run this once in the Supabase SQL editor for your project.

create table if not exists project_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text not null,
  email text not null,
  phone text,
  sector text not null,
  budget text not null,
  message text not null
);

-- Row Level Security: the API route uses the service role key, which
-- bypasses RLS entirely, so this just makes sure the table is locked
-- down against the public anon key (e.g. if it's ever exposed client-side).
alter table project_requests enable row level security;

-- No policies are created, which means the anon/public key has zero
-- access to this table by default. Only the service role key (used
-- server-side in app/api/request/route.ts) can read or write to it.
