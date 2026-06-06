"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/chat", label: "Chat" },
  { href: "/mcp", label: "MCP" },
  { href: "/agents", label: "Agents" },
  { href: "/workflows", label: "Workflows" },
  { href: "/runs", label: "Runs" },
  { href: "/leads", label: "Leads" },
  { href: "/approvals", label: "Approvals" },
  { href: "/settings", label: "Settings" },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr]">
        <aside className="border-r border-zinc-800 p-4">
          <div className="mb-4 text-lg font-semibold tracking-tight">MCP Agent Harness</div>
          <nav className="space-y-1 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 ${
                  pathname === item.href || pathname.startsWith(item.href)
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
