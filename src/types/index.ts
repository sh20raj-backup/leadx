export type MCPServer = {
  id?: string;
  name: string;
  transport: "stdio" | "sse" | "http";
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  url?: string;
  enabled: boolean;
  requiresApproval: boolean;
  allowedTools?: string[];
  blockedTools?: string[];
  description?: string;
};

export type ToolCall = {
  id: string;
  runId?: string;
  serverName: string;
  toolName: string;
  args?: Record<string, unknown>;
  result?: unknown;
  status: "running" | "success" | "error" | "pending_approval";
  createdAt: string;
  riskLevel?: string;
};

export type AgentRun = {
  id: string;
  workflowId?: string;
  task?: string;
  status: "queued" | "running" | "completed" | "failed" | "cancelled";
  userId?: string;
  createdAt: string;
  completedAt?: string;
  output?: unknown;
  toolCalls?: ToolCall[];
  cost?: number;
};

export type Approval = {
  id: string;
  runId?: string;
  toolCallId?: string;
  serverName: string;
  toolName: string;
  args?: Record<string, unknown>;
  riskLevel: "low" | "medium" | "high" | "critical";
  reason?: string;
  status: "pending" | "approved" | "rejected" | "expired" | "executed" | "failed";
  createdAt: string;
};

export type Lead = {
  id: string;
  businessName: string;
  industry?: string;
  location?: string;
  website?: string;
  socialUrl?: string;
  publicEmail?: string;
  publicPhone?: string;
  sourceUrl?: string;
  problemFound?: string;
  opportunity?: string;
  score?: number;
  status: "new" | "contacted" | "replied" | "suppressed" | "bounced";
  createdAt: string;
};

export type Workflow = {
  id: string;
  name: string;
  schedule?: string;
  timezone?: string;
  enabled: boolean;
  steps: { agent: string; task: string }[];
  limits?: Record<string, number>;
};

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: string;
};
