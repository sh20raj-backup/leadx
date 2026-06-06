import SiteShell from "@/components/site-shell";

export default function LeadsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-2xl font-semibold">Leads</h1>
        <p className="text-sm text-zinc-400">Lead table with scores, statuses, and outreach history.</p>
      </div>
    </SiteShell>
  );
}
