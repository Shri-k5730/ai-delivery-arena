-- AI Delivery Arena Hosted Beta v0.2
-- Run this migration in the Supabase SQL editor before deploying Streamlit.

create extension if not exists pgcrypto;

create table if not exists public.arena_runs (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users(id) on delete cascade,
    run_id text not null,
    display_name text not null,
    status text not null check (status in ('in_progress', 'completed')),
    decision_count integer not null default 0 check (decision_count between 0 and 20),
    total_decisions integer not null default 20 check (total_decisions = 20),
    revision integer not null check (revision > 0),
    scenario_id text not null,
    scenario_version text not null,
    -- AES-GCM ciphertext created by the Streamlit server. It contains the
    -- canonical save document, replay ledger, and internal rule identifiers.
    save_payload text not null,
    draft_decision_id text,
    draft_revision integer,
    draft_payload jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    completed_at timestamptz,
    constraint arena_runs_owner_run_unique unique (owner_id, run_id),
    constraint arena_runs_run_id_format check (
        run_id ~ '^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$'
    ),
    constraint arena_runs_display_name_length check (
        char_length(trim(display_name)) between 1 and 100
    ),
    constraint arena_runs_draft_consistency check (
        (
            draft_decision_id is null
            and draft_revision is null
            and draft_payload is null
        )
        or (
            draft_decision_id is not null
            and draft_revision is not null
            and draft_payload is not null
            and status = 'in_progress'
        )
    )
);

create index if not exists arena_runs_owner_updated_idx
    on public.arena_runs (owner_id, updated_at desc);

alter table public.arena_runs enable row level security;
alter table public.arena_runs force row level security;

drop policy if exists "arena_runs_select_own" on public.arena_runs;
create policy "arena_runs_select_own"
    on public.arena_runs
    for select
    to authenticated
    using ((select auth.uid()) = owner_id);

drop policy if exists "arena_runs_insert_own" on public.arena_runs;
create policy "arena_runs_insert_own"
    on public.arena_runs
    for insert
    to authenticated
    with check ((select auth.uid()) = owner_id);

drop policy if exists "arena_runs_update_own" on public.arena_runs;
create policy "arena_runs_update_own"
    on public.arena_runs
    for update
    to authenticated
    using ((select auth.uid()) = owner_id)
    with check ((select auth.uid()) = owner_id);

revoke all on table public.arena_runs from anon;
grant select, insert, update on table public.arena_runs to authenticated;

comment on table public.arena_runs is
    'User-scoped encrypted run checkpoints and mutable in-progress drafts.';
comment on column public.arena_runs.save_payload is
    'AES-GCM ciphertext. Never replace this column with plaintext JSON.';
