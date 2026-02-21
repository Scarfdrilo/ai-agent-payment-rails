"use client";

import { useState } from "react";
import Link from "next/link";

interface Agent {
  id: string;
  name: string;
  type: string;
  wallet: string;
  balance: number;
  spendLimit: number;
  status: "active" | "paused";
  reputation: number;
}

const initialAgents: Agent[] = [
  {
    id: "1",
    name: "Research Assistant",
    type: "Research",
    wallet: "0x1a2b...3c4d",
    balance: 250.5,
    spendLimit: 100,
    status: "active",
    reputation: 4.8
  },
  {
    id: "2",
    name: "Data Collector",
    type: "Data",
    wallet: "0x5e6f...7g8h",
    balance: 180.25,
    spendLimit: 50,
    status: "active",
    reputation: 4.5
  },
  {
    id: "3",
    name: "Trading Bot",
    type: "Trading",
    wallet: "0x9i0j...1k2l",
    balance: 520.0,
    spendLimit: 200,
    status: "paused",
    reputation: 4.9
  }
];

export default function Dashboard() {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [showModal, setShowModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [newAgent, setNewAgent] = useState({
    name: "",
    type: "Research",
    spendLimit: 100
  });
  const [quote, setQuote] = useState({
    service: "",
    price: "",
    description: ""
  });

  const totalBalance = agents.reduce((sum, a) => sum + a.balance, 0);
  const activeAgents = agents.filter((a) => a.status === "active").length;

  const handleCreateAgent = () => {
    const agent: Agent = {
      id: Date.now().toString(),
      name: newAgent.name,
      type: newAgent.type,
      wallet: `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`,
      balance: 0,
      spendLimit: newAgent.spendLimit,
      status: "active",
      reputation: 5.0
    };
    setAgents([...agents, agent]);
    setShowModal(false);
    setNewAgent({ name: "", type: "Research", spendLimit: 100 });
  };

  const handleCreateQuote = () => {
    alert(`Quote created!\n\nService: ${quote.service}\nPrice: ${quote.price} USDC\nFor Agent: ${selectedAgent?.name}`);
    setShowQuoteModal(false);
    setQuote({ service: "", price: "", description: "" });
  };

  const toggleAgentStatus = (id: string) => {
    setAgents(
      agents.map((a) =>
        a.id === id ? { ...a, status: a.status === "active" ? "paused" : "active" } : a
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-xl">💳</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Payment Rails
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-white font-medium">
              Dashboard
            </Link>
            <Link href="/explorer" className="text-slate-300 hover:text-white transition-colors">
              Explorer
            </Link>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm text-slate-300">Monad Testnet</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Agent Dashboard</h1>
              <p className="text-slate-400">Manage your AI agents and payment settings</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              + Create Agent
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">Total Balance</p>
              <p className="text-2xl font-bold text-white">${totalBalance.toFixed(2)}</p>
              <p className="text-green-400 text-sm mt-1">USDC</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">Active Agents</p>
              <p className="text-2xl font-bold text-white">{activeAgents}</p>
              <p className="text-purple-400 text-sm mt-1">of {agents.length} total</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">Today&apos;s Transactions</p>
              <p className="text-2xl font-bold text-white">24</p>
              <p className="text-cyan-400 text-sm mt-1">+12% vs yesterday</p>
            </div>
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-sm mb-1">Total Spent Today</p>
              <p className="text-2xl font-bold text-white">$156.30</p>
              <p className="text-orange-400 text-sm mt-1">Within limits</p>
            </div>
          </div>

          {/* Agents Table */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800">
              <h2 className="text-xl font-semibold text-white">Your Agents</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Agent</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Wallet</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Balance</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Spend Limit</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Reputation</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {agents.map((agent) => (
                    <tr key={agent.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                            <span>🤖</span>
                          </div>
                          <span className="font-medium text-white">{agent.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {agent.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-slate-400">{agent.wallet}</td>
                      <td className="px-6 py-4 text-white font-medium">${agent.balance.toFixed(2)}</td>
                      <td className="px-6 py-4 text-slate-300">${agent.spendLimit}/day</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-white">{agent.reputation}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleAgentStatus(agent.id)}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            agent.status === "active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-orange-500/20 text-orange-400"
                          }`}
                        >
                          {agent.status}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => {
                            setSelectedAgent(agent);
                            setShowQuoteModal(true);
                          }}
                          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors"
                        >
                          Create Quote
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Create Agent Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-6">Create New Agent</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Agent Name</label>
                <input
                  type="text"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
                  placeholder="My AI Agent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Agent Type</label>
                <select
                  value={newAgent.type}
                  onChange={(e) => setNewAgent({ ...newAgent, type: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
                >
                  <option>Research</option>
                  <option>Data</option>
                  <option>Trading</option>
                  <option>Compute</option>
                  <option>Creative</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Daily Spend Limit (USDC)
                </label>
                <input
                  type="number"
                  value={newAgent.spendLimit}
                  onChange={(e) => setNewAgent({ ...newAgent, spendLimit: Number(e.target.value) })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 bg-slate-700 rounded-xl font-medium hover:bg-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateAgent}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Create Agent
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Quote Modal */}
      {showQuoteModal && selectedAgent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-2">Create Service Quote</h3>
            <p className="text-slate-400 mb-6">For agent: {selectedAgent.name}</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Service Name</label>
                <input
                  type="text"
                  value={quote.service}
                  onChange={(e) => setQuote({ ...quote, service: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
                  placeholder="e.g., GPU Compute, Data Analysis"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Price (USDC)</label>
                <input
                  type="number"
                  value={quote.price}
                  onChange={(e) => setQuote({ ...quote, price: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500"
                  placeholder="50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                <textarea
                  value={quote.description}
                  onChange={(e) => setQuote({ ...quote, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-500 resize-none"
                  rows={3}
                  placeholder="Describe what this service provides..."
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowQuoteModal(false)}
                className="flex-1 px-4 py-3 bg-slate-700 rounded-xl font-medium hover:bg-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateQuote}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Create Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
