"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function ChatClient() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMessage = { role: "user", content: input };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const data = await api("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage.content }),
      });
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "(no reply)" }]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Request failed";
      setMessages((m) => [...m, { role: "system", content: message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800">
      <div className="max-h-[55vh] space-y-3 overflow-y-auto p-4">
        {messages.length === 0 && <p className="text-sm text-zinc-400">No messages yet.</p>}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`rounded-lg p-3 ${
              m.role === "user" ? "bg-zinc-800" : m.role === "assistant" ? "bg-zinc-900" : "bg-zinc-950 border border-zinc-800"
            }`}
          >
            <div className="text-xs text-zinc-400">{m.role}</div>
            <div className="mt-1 whitespace-pre-wrap text-sm">{m.content}</div>
          </div>
        ))}
        {loading && <div className="text-sm text-zinc-400">Thinking…</div>}
      </div>
      <form onSubmit={send} className="flex gap-2 border-t border-zinc-800 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-md border border-zinc-800 bg-zinc-950 p-2 text-sm outline-none focus:border-zinc-600"
          placeholder="Type a message…"
        />
        <button type="submit" disabled={loading} className="rounded-md bg-white px-3 py-2 text-sm font-medium text-black disabled:opacity-50">
          Send
        </button>
      </form>
    </div>
  );
}
