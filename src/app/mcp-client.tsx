"use client";

import { api } from "@/lib/api";

export default function MCPClient() {
  const addServer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      transport: (form.elements.namedItem("transport") as HTMLInputElement).value,
      command: (form.elements.namedItem("command") as HTMLInputElement).value,
      args: (form.elements.namedItem("args") as HTMLInputElement).value,
      url: (form.elements.namedItem("url") as HTMLInputElement).value,
      requiresApproval: true,
      enabled: true,
    };
    await api("/api/mcp/servers", {
      method: "POST",
      body: JSON.stringify(data),
    });
    form.reset();
    alert("Saved. Implement list sync later.");
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <form onSubmit={addServer} className="space-y-3 rounded-xl border border-zinc-800 p-4">
        <h2 className="text-lg font-medium">Add MCP server</h2>
        <input name="name" required placeholder="name" className="w-full rounded-md border border-zinc-800 bg-zinc-950 p-2 text-sm" />
        <input name="transport" required placeholder="transport: stdio | sse | http" className="w-full rounded-md border border-zinc-800 bg-zinc-950 p-2 text-sm" />
        <input name="command" placeholder="command (npx)" className="w-full rounded-md border border-zinc-800 bg-zinc-950 p-2 text-sm" />
        <input name="args" placeholder="args (comma-separated)" className="w-full rounded-md border border-zinc-800 bg-zinc-950 p-2 text-sm" />
        <input name="url" placeholder="url (sse/http)" className="w-full rounded-md border border-zinc-800 bg-zinc-950 p-2 text-sm" />
        <button type="submit" className="w-full rounded-md bg-white px-3 py-2 text-sm font-medium text-black">
          Save server
        </button>
      </form>
      <div className="rounded-xl border border-zinc-800 p-4">
        <h2 className="mb-3 text-lg font-medium">Server list</h2>
        <p className="text-sm text-zinc-400">Wire to GET /api/mcp/servers in backend.</p>
      </div>
    </div>
  );
}
