create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  subtitle text not null,
  industry text not null,
  scope text not null,
  impact text not null,
  focus text not null,
  cover_image text not null,
  excerpt text not null,
  year text not null,
  body text[] not null default '{}',
  is_case_study boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text,
  inquiry_type text not null,
  message text not null,
  source_page text not null,
  status text not null default 'new'
    check (status in ('new', 'in_review', 'responded', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.inquiries enable row level security;

drop policy if exists "Public read projects" on public.projects;
create policy "Public read projects" on public.projects
for select to anon, authenticated
using (true);

drop policy if exists "Authenticated manage projects" on public.projects;
create policy "Authenticated manage projects" on public.projects
for all to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated read inquiries" on public.inquiries;
create policy "Authenticated read inquiries" on public.inquiries
for select to authenticated
using (true);

drop policy if exists "Authenticated manage inquiries" on public.inquiries;
create policy "Authenticated manage inquiries" on public.inquiries
for all to authenticated
using (true)
with check (true);

