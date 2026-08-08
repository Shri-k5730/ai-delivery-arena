-- AI Delivery Arena Development Replays v0.6
-- Link an uncoached practice replay to its immutable first attempt.

alter table public.arena_runs
    add column if not exists attempt_kind text not null default 'first_attempt',
    add column if not exists source_run_id text;

alter table public.arena_runs
    drop constraint if exists arena_runs_attempt_kind_check;

alter table public.arena_runs
    add constraint arena_runs_attempt_kind_check check (
        (
            attempt_kind = 'first_attempt'
            and source_run_id is null
        )
        or (
            attempt_kind = 'practice_replay'
            and source_run_id is not null
        )
    );

create index if not exists arena_runs_owner_source_idx
    on public.arena_runs (owner_id, source_run_id)
    where source_run_id is not null;

comment on column public.arena_runs.attempt_kind is
    'Distinguishes a frozen first attempt from an uncoached practice replay.';
comment on column public.arena_runs.source_run_id is
    'Owner-scoped run ID of the immutable first attempt used for replay comparison.';
