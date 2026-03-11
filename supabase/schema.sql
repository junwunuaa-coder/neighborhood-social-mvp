-- Neighborhood Social MVP schema (Supabase / Postgres)
-- Run in Supabase SQL editor.

create extension if not exists "pgcrypto";

create table if not exists users_profile (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  phone text,
  nickname text not null,
  avatar_url text,
  role text not null default 'resident' check (role in ('resident','admin','property')),
  reputation_score int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists residences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users_profile(id) on delete cascade,
  community_name text not null,
  building_no text not null,
  unit_no text,
  room_no text,
  verify_status text not null default 'pending' check (verify_status in ('pending','approved','rejected')),
  reviewer_id uuid references users_profile(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users_profile(id) on delete cascade,
  category text not null check (category in ('help','market','notice','event')),
  title text not null,
  content text not null,
  images text[] not null default '{}',
  price numeric(10,2),
  status text not null default 'open' check (status in ('open','closed','resolved')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references posts(id) on delete cascade,
  user_id uuid not null references users_profile(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

create table if not exists conversation_members (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references conversations(id) on delete cascade,
  user_id uuid not null references users_profile(id) on delete cascade,
  unique (conversation_id, user_id)
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references conversations(id) on delete cascade,
  sender_id uuid not null references users_profile(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  organizer_id uuid not null references users_profile(id) on delete cascade,
  title text not null,
  description text,
  location text not null,
  event_time timestamptz not null,
  capacity int not null default 20,
  created_at timestamptz not null default now()
);

create table if not exists event_signups (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  user_id uuid not null references users_profile(id) on delete cascade,
  signup_status text not null default 'signed' check (signup_status in ('signed','cancelled','checked_in')),
  created_at timestamptz not null default now(),
  unique (event_id, user_id)
);

create table if not exists tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users_profile(id) on delete cascade,
  type text not null check (type in ('repair','complaint','suggestion')),
  title text not null,
  detail text not null,
  status text not null default 'submitted' check (status in ('submitted','processing','done')),
  assignee_id uuid references users_profile(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists ticket_logs (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references tickets(id) on delete cascade,
  operator_id uuid references users_profile(id),
  action text not null,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references users_profile(id) on delete cascade,
  target_type text not null check (target_type in ('post','comment','message','user')),
  target_id uuid not null,
  reason text not null,
  status text not null default 'open' check (status in ('open','reviewing','closed')),
  created_at timestamptz not null default now()
);

create index if not exists idx_posts_category_created_at on posts(category, created_at desc);
create index if not exists idx_tickets_status_created_at on tickets(status, created_at desc);
create index if not exists idx_comments_post_id_created_at on comments(post_id, created_at);
