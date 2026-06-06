import SiteShell from "@/components/site-shell";
import ChatClient from "./chat-client";

export default function ChatPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-2xl font-semibold">Chat</h1>
        <p className="mb-6 text-sm text-zinc-400">Chat with the AI agent. Safe tools run automatically. Sensitive actions require approval.</p>
        <ChatClient />
      </div>
    </SiteShell>
  );
}
