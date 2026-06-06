import SiteShell from "@/components/site-shell";

export default function AgentsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-2xl font-semibold">Agents</h1>
        <p className="text-sm text-zinc-400">Configure research, lead gen, outreach, Gmail, and daily cron agents.</p>
      </div>
    </SiteShell>
  );
}
