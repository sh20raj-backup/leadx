import SiteShell from "@/components/site-shell";

export default function ApprovalsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-2xl font-semibold">Approvals</h1>
        <p className="text-sm text-zinc-400">Approve, reject, or edit pending sensitive actions.</p>
      </div>
    </SiteShell>
  );
}
