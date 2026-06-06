import SiteShell from "@/components/site-shell";

export default function WorkflowsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-2xl font-semibold">Workflows</h1>
        <p className="text-sm text-zinc-400">Create, edit, and run cron workflows.</p>
      </div>
    </SiteShell>
  );
}
