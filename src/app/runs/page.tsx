import SiteShell from "@/components/site-shell";

export default function RunsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-2xl font-semibold">Runs</h1>
        <p className="text-sm text-zinc-400">Inspect run logs, tool calls, outputs, and traces.</p>
      </div>
    </SiteShell>
  );
}
