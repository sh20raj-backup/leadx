import SiteShell from "@/components/site-shell";

export default function SettingsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-zinc-400">Keys, safety policies, daily limits, and email settings.</p>
      </div>
    </SiteShell>
  );
}
