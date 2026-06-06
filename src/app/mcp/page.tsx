import SiteShell from "@/components/site-shell";
import MCPClient from "./mcp-client";

export default function MCPPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-2xl font-semibold">MCP Servers</h1>
        <MCPClient />
      </div>
    </SiteShell>
  );
}
