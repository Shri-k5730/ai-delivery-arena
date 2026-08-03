-- AI Delivery Arena Private Canary v0.5
-- Allow an authenticated participant to delete only rows they own.

drop policy if exists "arena_runs_delete_own" on public.arena_runs;
create policy "arena_runs_delete_own"
on public.arena_runs
for delete
to authenticated
using (owner_id = (select auth.uid()));
